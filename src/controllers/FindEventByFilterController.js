import { prismaClient } from "../database/prismaClient";
export class FindEventFilterController {
  async handle(request, response) {
    const { filter } = request.body
    var filterBy
    switch (filter){
      case 'proximo':
        filterBy = prismaClient.events.findFirst({
          orderBy:{
            event_date: 'asc'
          },
          where:{
            event_date:{
              gt: new Date()
            }
          }
        })
        break;
      case 'finalizados':
        filterBy = prismaClient.events.findMany({
          where: {
            event_date: {
              lt: new Date()
            }
          }
        })
        break;
      default:
        filterBy = prismaClient.events.findMany({
          where:{
            user_id:filter
          }
        })
        break;
    }

    const event = await filterBy;

    return response.json(event);
  }
}