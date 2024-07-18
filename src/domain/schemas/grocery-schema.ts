import { z } from "zod";
import { Category } from "../enums/category";

export const createGrocerySchema = z.object({
  name: z.string({ message: "Name must be at least 1 character long" }).min(1),
  quantity: z
    .number({ message: "Quantity must be greater than 0" })
    .int()
    .min(1),
  purchased: z.boolean({ message: "Purchased must be a boolean" }),
  category: z.nativeEnum(Category, { message: "Invalid category" }),
});

export const updateGrocerySchema = z.object({
  name: z
    .string({ message: "Name must be at least 1 character long" })
    .min(1)
    .optional(),
  quantity: z
    .number({ message: "Quantity must be greater than 0" })
    .int()
    .min(1)
    .optional(),
  purchased: z.boolean({ message: "Purchased must be a boolean" }).optional(),
  category: z.nativeEnum(Category, { message: "Invalid category" }).optional(),
});
