import { Router, type Request, type Response } from "express";
import { routerService } from "../../usecase/services/router-service";
import { HttpStatus } from "../../domain/enums/http-status";
import { z } from "zod";
import { errorMap } from "zod-validation-error";
import { groceryService } from "../../usecase/services/grocery-service";
import { createGroceryValidationMiddleware } from "../../usecase/middlewares/create-grocery-validation-middleware";
import { updateGroceryValidationMiddleware } from "../../usecase/middlewares/update-grocery-validator-middleware";

export class GroceryController {
  private async _create(req: Request, res: Response) {
    try {
      await groceryService.create(req.body);

      return res.status(HttpStatus.OK).json({ message: "Grocery created" });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  private async _findAll(_: Request, res: Response) {
    try {
      const groceries = await groceryService.findAll();

      return res.status(HttpStatus.OK).json(groceries);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  private async _remove(req: Request, res: Response) {
    try {
      await groceryService.remove(req.params.id);

      return res.status(HttpStatus.OK).json({ message: "Grocery removed" });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  private async _update(req: Request, res: Response) {
    try {
      await groceryService.update(req.params.id, req.body);

      return res.status(HttpStatus.OK).json({ message: "Grocery updated" });
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Internal server error",
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }

  public registerRoutes(): void {
    const router = Router();

    router.post("/", createGroceryValidationMiddleware.handle, this._create);
    router.get("/", this._findAll);
    router.delete("/:id", this._remove);
    router.put("/:id", updateGroceryValidationMiddleware.handle, this._update);

    routerService.router.use("/grocery", router);
  }
}

export const groceryController = new GroceryController();
