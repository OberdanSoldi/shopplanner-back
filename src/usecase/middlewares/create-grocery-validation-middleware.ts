import { NextFunction, Request, Response } from "express";
import { createGroceryValidator } from "../validators/create-grocery-validator";

class CreateGroceryValidationMiddleware {
  handle(req: Request, res: Response, next: NextFunction) {
    try {
      createGroceryValidator(req.body);
      next();
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export const createGroceryValidationMiddleware =
  new CreateGroceryValidationMiddleware();
