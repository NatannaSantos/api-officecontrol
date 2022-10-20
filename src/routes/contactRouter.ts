import { Router } from "express";
import contactController from "../controllers/contactController";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import contactSchema from "../schemas/contactSchema";

const contactRouter = Router();

contactRouter.post("/contacts",validateSchemaMiddleware(contactSchema),contactController.createContact);
contactRouter.get("/contacts",contactController.findContact);
contactRouter.put("/contacts/contact/:id",validateSchemaMiddleware(contactSchema),contactController.updateContact);
contactRouter.delete("/contacts/contact/:id",contactController.deleteContact);
export default contactRouter;
