import { Router } from "express";
import activityRouter from "./activityRouter.js";
import companyRouter from "./companyRouter.js";
import transactionRouter from "./transactionRouter.js";

const router = Router();

router.use(companyRouter);
router.use(transactionRouter);
router.use(activityRouter);

export default router;