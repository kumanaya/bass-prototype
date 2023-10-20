import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const UserSchema = new Schema<IUser>({
  accountOnboardingType: {
    type: String,
    enum: ["BANKACCOUNT"],
    required: true,
  },
  documentNumber: {
    type: String,
    unique: true,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  socialName: {
    type: String,
    required: false,
  },
  birthDate: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  isPoliticallyExposedPerson: {
    type: Boolean,
    required: true,
  },
  createTimestamp: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
