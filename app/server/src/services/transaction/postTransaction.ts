/* eslint-disable @typescript-eslint/no-explicit-any */

import TransactionModel from "../../models/transaction.model";

import { ITransaction } from "../../interfaces/transaction.interface";

import { Types } from "mongoose";

interface IRequest {
  account: Types.ObjectId;
  type: string;
  amount: number;
}

class PostTransaction {
  async execute(data: IRequest): Promise<ITransaction> {
    const object: ITransaction = {
      account: new Types.ObjectId(data.account),
      type: data.type,
      amount: data.amount,
      timestamp: new Date(),
    };

    const account = await TransactionModel.create(object);

    return account;
  }
}

export default PostTransaction;
