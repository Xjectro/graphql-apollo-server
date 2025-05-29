import { Context } from "@/types";
import { defaultFieldResolver, GraphQLSchema } from "graphql";
import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";

export function hasPermissionDirectiveTransformer(
  schema: GraphQLSchema,
): GraphQLSchema {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const permissionDirective = getDirective(
        schema,
        fieldConfig,
        "hasPermission",
      )?.[0];

      if (permissionDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        const requiredPermission = permissionDirective.permission;

        fieldConfig.resolve = async function (
          parent,
          args,
          context: Context,
          info,
        ) {
          if (!context.isAuthenticated) {
            throw new Error("Authentication required");
          }

          const userPerm = context.user?.permission || 0;

          if (userPerm < requiredPermission) {
            throw new Error("You don't have permission to perform this action");
          }

          return resolve.call(this, parent, args, context, info);
        };
      }
      return fieldConfig;
    },
  });
}
