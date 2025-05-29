import { Context } from "@/types";
import { defaultFieldResolver, GraphQLSchema } from "graphql";
import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";

export function authenticatedDirectiveTransformer(
  schema: GraphQLSchema,
): GraphQLSchema {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(
        schema,
        fieldConfig,
        "authenticated",
      )?.[0];

      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;

        fieldConfig.resolve = async function (
          parent,
          args,
          context: Context,
          info,
        ) {
          if (!context.isAuthenticated) {
            throw new Error("Authentication required");
          }

          return resolve.call(this, parent, args, context, info);
        };
      }
      return fieldConfig;
    },
  });
}
