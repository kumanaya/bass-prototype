import { IUser } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";

interface IRequest {
  id: string;
}

class GetUserById {
  async execute({ id }: IRequest): Promise<IUser | unknown> {
    const user = await UserModel.findById(id);
    return user != null ? user : {};
  }
}

export default GetUserById;
