import { Router } from "express";

import UserRoutes from "./routes/user.routes";
import AccountRoutes from "./routes/account.routes";
import TransactionRoutes from "./routes/transaction.routes";
import PixRoutes from "./routes/pix.routes";

const router = Router();

router.use(UserRoutes);
router.use(AccountRoutes);
router.use(TransactionRoutes);
router.use(PixRoutes);

export default router;
