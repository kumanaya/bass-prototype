import { Router } from "express";

import PixController from "../controllers/pix.controller";

const pixController = new PixController();

const router = Router();

router.post("/pix", pixController.post);

export default router;
