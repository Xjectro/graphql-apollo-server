import UserService from "@/services/user.service";
import { ContextFunction } from "@apollo/server";
import { StandaloneServerContextFunctionArgument as ServerContextArg } from "@apollo/server/standalone";

const ctx = { isAuthenticated: false, user: null };

export const context: ContextFunction<[ServerContextArg]> = async ({
  req,
  res,
}) => {
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
