import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { mergeResolvers } from "@graphql-tools/merge";
import { userResolvers } from "@/graphql/resolvers/user.resolver";
import { userSchema } from "@/graphql/schemas/user.schema";
import { hasPermissionDirectiveTransformer } from "@/graphql/directives/hasPermission";
import { authenticatedDirectiveTransformer } from "@/graphql/directives/authenticated";
import { baseSchema } from "@/graphql/schemas/base.schema";

export const typeDefs = mergeTypeDefs([baseSchema, userSchema]);
export const resolvers = mergeResolvers([userResolvers]);

let schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

schema = hasPermissionDirectiveTransformer(schema);
schema = authenticatedDirectiveTransformer(schema);

export default schema;
