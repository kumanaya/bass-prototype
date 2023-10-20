import UserModel from "../../models/account.model";
import AppError from "../../lib/error";
import { IAccount } from "../../interfaces/account.interface";

interface IRequest {
  id: string;
  account: IAccount;
}

class PutAccount {
  async execute({ id, account }: IRequest): Promise<IAccount | null> {
    const accountUpdated = await UserModel.findOneAndUpdate(
      { _id: id },
      account
    );

    if (!accountUpdated) {
      throw new AppError(
        404,
        "ACCOUHT_NOT_FOUND",
        "No account found with the provided id."
      );
    }

    return accountUpdated;
  }
}

export default PutAccount;
