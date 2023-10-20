import mongoose, { Schema } from "mongoose";
import { IAccount } from "../interfaces/account.interface";

const AccountSchema = new Schema<IAccount>({
  user: {
    type: "ObjectId",
    ref: "User",
    required: true,
  },
  category: {
    type: String,
    enum: ["CONTA_CORRENTE", "CONTA_POUPANCA"],
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
    unique: true,
  },
  pix: [
    {
      type: Object,
      required: true,
    },
  ],
  createTimestamp: {
    type: Date,
    default: Date.now,
  },
});

const AccountModel = mongoose.model<IAccount>("Account", AccountSchema);

export default AccountModel;
