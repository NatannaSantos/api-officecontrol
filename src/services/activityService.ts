import { Activity } from "@prisma/client";
import { notFoundError } from "../../utils/errorUtils.js";
import activityRepository from "../repositories/activityRepository.js";

export type CreateActivityData = Omit<Activity,"id">

async function createActivity(activity: CreateActivityData){
    await activityRepository.insert(activity);
}
async function findActivities(companyId: number) {
    const existingActivities = await activityRepository.findActivityByCompanyId(companyId);
    if (!existingActivities) throw notFoundError("there are no contacts for this user");

    return (existingActivities);
}

async function updateActivity(companyId:number, activityId: number, activityData: CreateActivityData) {
    const existingActivity = await activityRepository.findActivityByCompanyId(companyId);
    if (!existingActivity) throw notFoundError("there are no contacts for this user");
    await activityRepository.updateActivityById(activityId, activityData);
}
async function deleteActivity(companyId:number, activityId: number) {
    const existingActivity = await activityRepository.findActivityByCompanyId(companyId);
    if(!existingActivity) throw notFoundError("there are no contacts for this user");
    await activityRepository.deleteActivity(activityId);
}

export default{
    createActivity,
    findActivities,
    updateActivity,
    deleteActivity
}