import mongoose, { Schema } from "mongoose";
import { ITransaction } from "../interfaces/transaction.interface";

const transactionSchema = new Schema<ITransaction>({
  account: {
    type: "ObjectId",
    ref: "Account",
    required: true,
  },
  type: {
    type: String,
    enum: ["PIX", "WITHDRAW", "DEPOSIT"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const TransactionModel = mongoose.model<ITransaction>(
  "Transaction",
  transactionSchema
);

export default TransactionModel;
