import type { Request, Response, NextFunction } from "express";

import HandleTransaction from "../services/transaction/handleTransaction";
import { transactionSchema } from "../validations/transaction.validation";
import GetTransactionById from "../services/transaction/getTransactionById";

class TransactionController {
  async get(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = request.params;
      const getTransactionById = new GetTransactionById();
      const user = await getTransactionById.execute({ id });
      return response.json(user);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  async post(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const transactionData = transactionSchema.parse(request.body);

      const handleTransaction = new HandleTransaction();
      const transaction = await handleTransaction.execute(transactionData);

      return response.json(transaction);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

export default TransactionController;
