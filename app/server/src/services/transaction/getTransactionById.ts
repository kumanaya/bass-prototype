import { ITransaction } from "../../interfaces/transaction.interface";
import TransactionModel from "../../models/transaction.model";

interface IRequest {
  id: string;
}

class GetTransactionById {
  async execute({ id }: IRequest): Promise<ITransaction | unknown> {
    const transaction = await TransactionModel.findById(id);
    return transaction != null ? transaction : {};
  }
}

export default GetTransactionById;
