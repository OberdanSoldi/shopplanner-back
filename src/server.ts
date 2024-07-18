import express, { Express } from "express";
import { routerService } from "./usecase/services/router-service";
import { apiKeyMiddleware } from "./usecase/middlewares/api-key-middleware";

class Server {
  private _app: Express;
  private _port: number;

  constructor(port: number) {
    this._app = express();
    this._port = port;
  }

  private _configureGlobalMiddlewares(): void {
    this._app.use(apiKeyMiddleware.handle);
  }

  private _configure(): void {
    this._app.use(express.json());
    this._configureGlobalMiddlewares();

    routerService.useRegisteredControllers();
  }

  public run(): void {
    this._configure();
    this._app.listen(this._port, () => {
      console.info(`Server is running on port ${this._port}`);
    });
  }

  public get app(): Express {
    return this._app;
  }
}

const port = 3000;

export const server = new Server(port);
server.run();
