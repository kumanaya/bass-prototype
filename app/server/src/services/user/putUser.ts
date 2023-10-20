import UserModel from "../../models/user.model";
import AppError from "../../lib/error";
import { IUser } from "../../interfaces/user.interface";

interface IRequest {
  id: string;
  user: IUser;
}

class PutUser {
  async execute({ id, user }: IRequest): Promise<IUser | null> {
    const userUpdated = await UserModel.findOneAndUpdate({ _id: id }, user);

    if (!userUpdated) {
      throw new AppError(
        404,
        "USER_NOT_FOUND",
        "No user found with the provided id."
      );
    }

    return userUpdated;
  }
}

export default PutUser;
