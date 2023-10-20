import { IAccount } from "../../interfaces/account.interface";
import AccountModel from "../../models/account.model";

interface IRequest {
  key: string;
}

class GetPixByKey {
  async execute({ key }: IRequest): Promise<IAccount | unknown> {
    const account = await AccountModel.findOne({ "pix.key": key });
    return account != null ? account : {};
  }
}

export default GetPixByKey;
