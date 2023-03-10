import Joi from "joi";
import { CreateContactData } from "../services/contactService.js";

type CreateContactSchemaData = Omit <CreateContactData,"companyId">

const contactSchema = Joi.object<CreateContactSchemaData>({
    name: Joi.string().required(),
    Tel:Joi.string().pattern(/^([0-9]{2})[0-9]{8,9}$/),
    email: Joi.string().email(),
    adress: Joi.string()
});

export default contactSchema;