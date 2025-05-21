import prisma from "@/models/prisma.client";

export async function getTurtles() {
  const turtles = await prisma.turtle.findMany();
  return turtles.map((turtle) => ({
    id: turtle.turtle_id,
    name: turtle.name,
  }));
}

export async function createTurtle(name: string) {
  const turtle = await prisma.turtle.create({
    data: { name },
  });

  return {
    id: turtle.turtle_id,
    name: turtle.name,
  };
}
