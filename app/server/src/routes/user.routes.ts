import { Router } from "express";

import UserController from "../controllers/user.controller";

const userController = new UserController();

const router = Router();

router.get("/user/:id", userController.get);
router.post("/user", userController.post);
router.put("/user/:id", userController.put);
router.delete("/user/:id", userController.delete);

export default router;
