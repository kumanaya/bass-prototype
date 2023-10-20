import type { Request, Response, NextFunction } from "express";

import GetUserById from "../services/user/getUserById";
import PostUser from "../services/user/postUser";
import PutUser from "../services/user/putUser";
import DeleteUser from "../services/user/deleteUser";

import { userSchema } from "../validations/user.validation";

import { IUser } from "../interfaces/user.interface";

class UserController {
  async get(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = request.params;
      const getUserById = new GetUserById();
      const user = await getUserById.execute({ id });
      return response.json(user);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  async post(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const userData = userSchema.parse(request.body);

      const postUser = new PostUser();
      const user = await postUser.execute(userData);

      return response.json(user);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  async put(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = request.params;
      const user = request.body as IUser;
      const putUser = new PutUser();
      const userUpdated = await putUser.execute({ id, user });
      return response.json(userUpdated);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
  async delete(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const { id } = request.params;
      const deleteUser = new DeleteUser();
      const user = await deleteUser.execute({ id });
      return response.json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }
}

export default UserController;
