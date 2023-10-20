import { Types } from "mongoose";

interface ITransaction {
  account: Types.ObjectId;
  type: string;
  amount: number;
  timestamp?: Date;
}

export { ITransaction };
