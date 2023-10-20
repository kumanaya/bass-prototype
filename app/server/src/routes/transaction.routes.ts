import { Router } from "express";

import TransactionController from "../controllers/transaction.controller";

const transactionController = new TransactionController();

const router = Router();

router.get("/transaction/:id", transactionController.get);
router.post("/transaction", transactionController.post);

export default router;
