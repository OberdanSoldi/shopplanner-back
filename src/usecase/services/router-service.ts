import { Router } from "express";
import { groceryController } from "../../http/controllers/grocery.controller";
import { server } from "../../server";

class RouterService {
  private _router: Router;

  constructor() {
    this._router = Router();
  }

  public useRegisteredControllers(): void {
    groceryController.registerRoutes();

    server.app.use(this._router);
  }

  public get router(): Router {
    return this._router;
  }
}

export const routerService = new RouterService();
