import { prismaClient } from "../database/prismaClient";

export class FindEventByFilterController {
  async handle(request, response) {

    const filter = request.body
    var filterBy = ''
    switch (filter){
      case 'proximo':
        filterBy = {
          orderBy:{
            event_date
          }
        }
        break;
      case 'finalizados':
        filterBy = {
          where: {
            event_date: {
              lt: new Date()
            }
          }
        }
        break;
      default:
        filterBy = {
          where:{
            id:filter
          }
        }
        break;
    }

    const event = await prismaClient.events.findMany(filterBy);

    return response.json(event);
  }
}