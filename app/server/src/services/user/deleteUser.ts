import UserModel from "../../models/user.model";

interface IRequest {
  id: string;
}

interface IResponse {
  statusCode: string;
  message: string;
}

class DeleteUser {
  async execute({ id }: IRequest): Promise<IResponse> {
    const user = await UserModel.findByIdAndDelete(id);

    return {
      statusCode: "SUCCESS",
      message: `Success to delete: ${user?._id}`,
    };
  }
}

export default DeleteUser;
