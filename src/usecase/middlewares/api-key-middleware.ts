import type { NextFunction, Request, Response } from "express";
import { HttpStatus } from "../../domain/enums/http-status";

class ApiKeyMiddleware {
  handle(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers["api-key"];

    const internalApiKey = process.env.API_KEY;

    if (!apiKey) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: "Missing credentials",
        statusCode: HttpStatus.UNAUTHORIZED,
      });
    }

    if (apiKey !== internalApiKey) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: "Invalid credentials",
        statusCode: HttpStatus.UNAUTHORIZED,
      });
    }

    next();
  }
}

export const apiKeyMiddleware = new ApiKeyMiddleware();
