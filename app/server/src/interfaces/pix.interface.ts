import { Types } from "mongoose";

interface IPixTransfer {
  account: Types.ObjectId;
  key: string;
  amount: number;
}

export { IPixTransfer };
