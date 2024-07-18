import { createGrocerySchema } from "../../domain/schemas/grocery-schema";
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

export const createGroceryValidator = (body: Record<string, any>) => {
  try {
    createGrocerySchema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      throw fromError(error);
    }
  }
};
