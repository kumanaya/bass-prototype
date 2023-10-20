/* eslint-disable @typescript-eslint/no-explicit-any */

import { Types } from "mongoose";
import GetAccountById from "../account/getAccountById";
import AppError from "../../lib/error";
import { ITransaction } from "../../interfaces/transaction.interface";
import PostTransaction from "../transaction/postTransaction";
import GetPixByKey from "./getPixByKey";

interface IRequest {
  account: string;
  key: string;
  amount: number;
}

interface IResponse {
  statusCode: string;
  message: string;
}

class PostPix {
  async execute(pix: IRequest): Promise<IResponse> {
    const getAccountById = new GetAccountById();
    const postTransaction = new PostTransaction();
    const getPixByKey = new GetPixByKey();

    // (PIX | Destination) - Verify Pix

    const from: any = await getPixByKey.execute({ key: pix.key });

    if (Object.keys(from).length === 0) {
      throw new AppError(404, "PIX_NOT_FOUND", "Pix users not exists.");
    }

    from.balance = from.balance + pix.amount;

    from.save();

    // (PIX | Origin) - Handle Pix

    const account: any = await getAccountById.execute({
      id: pix.account,
    });

    if (Object.keys(account).length === 0) {
      throw new AppError(404, "USER_NOT_FOUND", "User not exists.");
    }

    if (pix.amount > account.balance) {
      throw new AppError(402, "NO_MONEY", "The balance is not enough.");
    }

    const transaction: ITransaction = {
      account: new Types.ObjectId(pix.account),
      type: "PIX",
      amount: pix.amount,
      timestamp: new Date(),
    };

    await postTransaction.execute(transaction);

    account.balance = account.balance - pix.amount;

    account.save();

    return {
      statusCode: "SUCCESS",
      message: `Pix transfer to: ${pix.key}`,
    };
  }
}

export default PostPix;
