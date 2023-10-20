/* eslint-disable @typescript-eslint/no-unused-vars */
/** src/middlewares/errors.ts **/

import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import AppError from "../lib/error";

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return response.status(400).json({
      errorCode: error.errorCode,
      message: error.message,
    });
  }
  if (error instanceof z.ZodError) {
    return response.json(error.issues);
  }
  return response.status(500).json({
    errorCode: "UNHANDLED_ERROR",
    message: "Internal Server Error",
  });
};
