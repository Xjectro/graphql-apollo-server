import prisma from "@/models/prisma.client";
import redis from "@/models/redis.client";
import { User } from "@prisma/client";
import { verifyToken, generateToken } from "@xjectro/jwt";
import bcrypt from "bcrypt";

export default class UserService {
  static async findUserByToken(token: string): Promise<User | void> {
    const decoded: any = verifyToken(token, {
      secret: process.env.JWT_SECRET!,
    });
    if (!decoded) {
      return void 0;
    }

    const cached = await redis.get(decoded.userId);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (parsed && typeof parsed == "object" && "id" in parsed) {
          return parsed as User;
        }
      } catch {
        return void 0;
      }
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) {
      return void 0;
    }

    await redis.setEx(user.id, 300, JSON.stringify(user));

    return user;
  }

  static async createUser(
    input: Pick<User, "firstName" | "lastName" | "email" | "password">,
  ): Promise<User | void> {
    const existingUser = await prisma.user
      .findUnique({ where: { email: input.email } })
      .catch(() => null);
    if (existingUser) {
      return void 0;
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);
    input.password = hashedPassword;

    const user = await prisma.user
      .create({
        data: input,
      })
      .catch(() => void 0);

    return user;
  }

  static async authenticateUser(
    input: Pick<User, "email" | "password">,
  ): Promise<{ token: string } | void> {
    const user = await prisma.user.findUnique({
      where: { email: input.email },
    });
    if (!user) {
      return void 0;
    }

    const isValid = await bcrypt.compare(input.password, user.password);
    if (!isValid) {
      return void 0;
    }

    const token = generateToken(
      { userId: user.id },
      { secret: process.env.JWT_SECRET!, expiresIn: "6d" },
    );
    return { token };
  }
}
