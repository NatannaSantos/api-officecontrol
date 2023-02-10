import { Router } from "express";
import contactController from "../controllers/contactController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import contactSchema from "../schemas/contactSchema.js";

const contactRouter = Router();

contactRouter.post("/contacts",validateSchemaMiddleware(contactSchema),contactController.createContact);
contactRouter.get("/contacts",contactController.findContact);
contactRouter.put("/contacts/contact/:id",validateSchemaMiddleware(contactSchema),contactController.updateContact);
contactRouter.delete("/contacts/contact/:id",contactController.deleteContact);
export default contactRouter;
