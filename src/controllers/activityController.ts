import { Request, Response } from "express";
import activityService from "../services/activityService.js";

async function createActivity(req:Request, res: Response){
    const activity = req.body;
    const {company} = res.locals

    await activityService.createActivity({...activity,companyId:company.id});
    res.sendStatus(201);
}
async function findActivity(req:Request, res:Response) {
    const {company} = res.locals;

    const contact = await activityService.findActivities(company.id);

    return res.status(200).send(contact);
}
async function updateActivity(req:Request, res:Response){
    const {id} = req.params;
    const activityId = parseInt(id);
    const activityData = req.body;
    const {company} = res.locals;

    await activityService.updateActivity(company.id, activityId, activityData);
    res.sendStatus(201);
}
async function deleteActivity(req:Request, res:Response){
    const {id} = req.params;
    const activityId = parseInt(id);
    const {company} = res.locals;

    await activityService.deleteActivity(company.id, activityId);
    res.sendStatus(201);
}

export default{
    createActivity,
    findActivity,
    updateActivity,
    deleteActivity
}