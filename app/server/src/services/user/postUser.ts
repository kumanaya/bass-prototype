/* eslint-disable @typescript-eslint/no-explicit-any */

import UserModel from "../../models/user.model";

import GetUserByDoc from "./getUserByDoc";

import { IUser } from "../../interfaces/user.interface";

import AppError from "../../lib/error";

// interface IResponse {}

class PostUser {
  async execute(data: IUser): Promise<IUser> {
    const getUserByDoc = new GetUserByDoc();

    const userExists: any = await getUserByDoc.execute({
      documentNumber: data.documentNumber,
    });

    if (Object.keys(userExists).length !== 0) {
      throw new AppError(
        409,
        "USER_ALREADY_EXISTS",
        "Document number already exists."
      );
    }

    const user = await UserModel.create(data);

    return user;
  }
}

export default PostUser;
