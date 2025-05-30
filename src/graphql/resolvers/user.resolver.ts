import { User } from "@prisma/client";
import UserService from "@/services/user.service";
import { Context, ResolverParent, ResolverArgs } from "@/types";

export const userResolvers = {
  Query: {
    currentUser: (
      _: ResolverParent,
      __: Record<string, never>,
      { user }: Context,
    ) => {
      if (!user) throw new Error("Not authenticated");
      return user;
    },
  },
  Mutation: {
    createUser: async (
      _: ResolverParent,
      args: ResolverArgs<
        Pick<User, "firstName" | "lastName" | "email" | "password">
      >,
    ) => {
      const user = await UserService.createUser(args.input!);
      if (!user) {
        throw new Error("User already exists or invalid input");
      }
      return { success: true };
    },
    authentication: async (
      _: ResolverParent,
      args: ResolverArgs<Pick<User, "email" | "password">>,
    ) => {
      const response = await UserService.authenticateUser(args.input!);
      if (!response) {
        throw new Error("Invalid email or password");
      }
      return response;
    },
  },
};
