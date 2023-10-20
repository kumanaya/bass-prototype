import { Types } from "mongoose";
interface IPix {
  type: string;
  key: string;
  isRegistered: boolean;
}

interface IAccount {
  user: Types.ObjectId;
  category: string;
  balance: number;
  branch: string;
  account: string;
  pix: IPix[];
  createTimestamp: Date;
}

export { IAccount };
