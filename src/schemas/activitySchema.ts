import Joi from "joi";
import { CreateActivityData } from "../services/activityService.js";

type ActivityData = Omit<CreateActivityData, "companyId">

const activitySchema = Joi.object<ActivityData>({
    description: Joi.string().required(),
    date: Joi.string().required(),
    hour: Joi.string()
})

export default activitySchema