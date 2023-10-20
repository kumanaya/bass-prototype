/* eslint-disable @typescript-eslint/no-explicit-any */

import { ITransaction } from "../../interfaces/transaction.interface";

import { Types } from "mongoose";
import PostTransaction from "./postTransaction";
import GetAccountById from "../account/getAccountById";
import AppError from "../../lib/error";

interface IRequest {
  account: string;
  type: string;
  amount: number;
}

class HandleTransaction {
  async execute(transaction: IRequest): Promise<ITransaction> {
    const getAccountById = new GetAccountById();
    const postTransaction = new PostTransaction();

    const object: ITransaction = {
      account: new Types.ObjectId(transaction.account),
      type: transaction.type,
      amount: transaction.amount,
      timestamp: new Date(),
    };

    const account: any = await getAccountById.execute({
      id: transaction.account,
    });

    if (Object.keys(account).length === 0) {
      throw new AppError(400, "USER_NOT_EXISTS", "User not exists.");
    }

    switch (transaction.type) {
      case "WITHDRAW":
        await postTransaction.execute(object);
        account.balance = account.balance - transaction.amount;
        break;

      case "DEPOSIT":
        await postTransaction.execute(object);
        account.balance = account.balance + transaction.amount;
        break;
    }

    account.save();

    return object;
  }
}

export default HandleTransaction;
