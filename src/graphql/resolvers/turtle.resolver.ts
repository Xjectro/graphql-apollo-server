import * as turtleService from "@/services/turtle.service";

export const turtleResolver = {
  Query: {
    turtles: () => turtleService.getTurtles(),
  },
  Mutation: {
    createTurtle: (_: any, args: { name: string }) =>
      turtleService.createTurtle(args.name),
  },
};
