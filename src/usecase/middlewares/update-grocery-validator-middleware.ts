import { NextFunction, Request, Response } from "express";
import { updateGroceryValidator } from "../validators/update-grocery-validator";

class UpdateGroceryValidationMiddleware {
  handle(req: Request, res: Response, next: NextFunction) {
    try {
      updateGroceryValidator(req.body);
      next();
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export const updateGroceryValidationMiddleware =
  new UpdateGroceryValidationMiddleware();
