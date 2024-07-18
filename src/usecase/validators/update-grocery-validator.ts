import { ZodError } from "zod";
import { updateGrocerySchema } from "../../domain/schemas/grocery-schema";
import { fromError } from "zod-validation-error";

export const updateGroceryValidator = (body: Record<string, any>) => {
  try {
    updateGrocerySchema.parse(body);
  } catch (error) {
    if (error instanceof ZodError) {
      throw fromError(error);
    }
  }
};
