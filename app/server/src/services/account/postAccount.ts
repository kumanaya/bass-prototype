/* eslint-disable @typescript-eslint/no-explicit-any */

import { v4 as uuidv4 } from "uuid";

import AccountModel from "../../models/account.model";

import { IAccount } from "../../interfaces/account.interface";
import generateAccount from "../../utils/generateAccount";
import generateBranch from "../../utils/generateBranch";
import { Types } from "mongoose";

interface IRequest {
  user: string;
  category: string;
}

class PostAccount {
  async execute(data: IRequest): Promise<IAccount> {
    const accountNumber = generateAccount();
    const branchNumber = generateBranch(accountNumber);

    const object: IAccount = {
      user: new Types.ObjectId(data.user),
      category: data.category,
      balance: 0,
      branch: branchNumber,
      account: accountNumber,
      pix: [
        {
          type: "random",
          key: uuidv4(),
          isRegistered: true,
        },
      ],
      createTimestamp: new Date(),
    };

    const account = await AccountModel.create(object);

    return account;
  }
}

export default PostAccount;
