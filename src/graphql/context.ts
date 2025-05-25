import UserService from "@/services/user.service";
import { ExpressContext } from "apollo-server-express";

const ctx = { isAuthenticated: false, user: null };

export const context = async ({ req, res }: ExpressContext) => {
  const authorization = req.headers["authorization"];
  const token = authorization?.split(" ")[1];

  if (authorization && token) {
    const user = await UserService.findUserByToken(token).catch(() => null);
    Object.assign(ctx, { isAuthenticated: !!user, user });
  }

  return {
    ...ctx,
    req,
    res,
  };
};
