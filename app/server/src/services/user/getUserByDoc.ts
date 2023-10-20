import { IUser } from "../../interfaces/user.interface";
import UserModel from "../../models/user.model";

interface IRequest {
  documentNumber: string;
}

class GetUserByDoc {
  async execute({ documentNumber }: IRequest): Promise<IUser | unknown> {
    const user = await UserModel.find({ documentNumber });
    return user != null ? user : {};
  }
}

export default GetUserByDoc;
