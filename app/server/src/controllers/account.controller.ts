import type { Request, Response, NextFunction } from "express";

import PostAccount from "../services/account/postAccount";
import { accountSchema } from "../validations/account.validation";

class AccountController {
  async post(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const accountData = accountSchema.parse(request.body);

      const postAccount = new PostAccount();
      const account = await postAccount.execute(accountData);

      return response.json(account);
    } catch (error) {
      // console.error(error);
      next(error);
    }
  }
}

export default AccountController;
