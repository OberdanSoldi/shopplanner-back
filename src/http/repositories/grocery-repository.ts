import type { Grocery } from "../../domain/grocery";
import { prisma } from "../../lib/prisma";

class GroceryRepository {
  async create(grocery: Grocery) {
    await prisma.grocery.create({
      data: {
        category: grocery.category,
        name: grocery.name,
        purchased: grocery.purchased,
        quantity: grocery.quantity,
      },
    });
  }

  async findAll(): Promise<Grocery[]> {
    return (await prisma.grocery.findMany()) as Grocery[];
  }

  async remove(id: string) {
    await prisma.grocery.delete({
      where: {
        id,
      },
    });
  }

  async update(id: string, grocery: Grocery) {
    await prisma.grocery.update({
      where: {
        id,
      },
      data: {
        category: grocery.category,
        name: grocery.name,
        purchased: grocery.purchased,
        quantity: grocery.quantity,
      },
    });
  }
}

export const groceryRepository = new GroceryRepository();
