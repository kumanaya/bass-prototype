import type { Request, Response, NextFunction } from "express";

import PostPix from "../services/pix/postPix";

import { pixTransferSchema } from "../validations/pix.validation";

class PixController {
  async post(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const pixData = pixTransferSchema.parse(request.body);

      const postPix = new PostPix();
      const pix = await postPix.execute(pixData);

      return response.json(pix);
    } catch (error) {
      // console.error(error);
      next(error);
    }
  }
}

export default PixController;
