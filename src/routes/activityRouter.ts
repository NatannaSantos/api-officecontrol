import { Router } from "express";
import activityController from "../controllers/activityController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import activitySchema from "../schemas/activitySchema.js";

const activityRouter = Router();

activityRouter.post("/activities",validateSchemaMiddleware(activitySchema),activityController.createActivity);
activityRouter.get("/activities", activityController.findActivity);
activityRouter.put("/activities/activity/:id",validateSchemaMiddleware(activitySchema), activityController.updateActivity);
activityRouter.delete("/activities/activity/:id", activityController.deleteActivity);

export default activityRouter;