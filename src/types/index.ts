import { User } from "@prisma/client";

export interface Context {
  user?: User;
  isAuthenticated: boolean;
}

export type ResolverParent = object;

export interface ResolverArgs<T = Record<string, never>> {
  input?: T;
}
