import { IAccount } from "../../interfaces/account.interface";
import AccountModel from "../../models/account.model";

interface IRequest {
  id: string;
}

class GetAccountById {
  async execute({ id }: IRequest): Promise<IAccount | unknown> {
    const account = await AccountModel.findById(id);
    return account != null ? account : {};
  }
}

export default GetAccountById;
