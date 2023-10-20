import { Router } from "express";

import AccountController from "../controllers/account.controller";

const accountController = new AccountController();

const router = Router();

router.post("/account", accountController.post);

export default router;
