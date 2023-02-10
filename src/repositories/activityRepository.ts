import { prisma } from "../database.js"
import { CreateActivityData } from "../services/activityService";

async function insert(createActivityData: CreateActivityData){
    return prisma.activity.create({
        data:createActivityData,
    });
}

async function findActivityByCompanyId(companyId: number) {
    return prisma.activity.findMany({
        where: {
            companyId
        }
    })
}
async function updateActivityById(activityId:number, activityData:CreateActivityData) {
    return prisma.activity.update({
        where:{
            id: activityId,
        },
        data:{
           ...activityData
        }
    })
}

async function deleteActivity(activityId: number) {
    return prisma.activity.delete({
        where: {
            id: activityId
        }
    })
}

export default{
    insert,
    findActivityByCompanyId,
    updateActivityById,
    deleteActivity
}