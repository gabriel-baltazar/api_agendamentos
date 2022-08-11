import { prismaClient } from "../database/prismaClient";

export class UpdateEventController {
  async handle(request, response) {
    const { name, image, event_date, location, ready, phone, user_id } = request.body;
    const { id } = request.params;

    const event = await prismaClient.events.update({
      where:{
        id
      },
      data: {
        name,        
        image,       
        event_date, 
        location,    
        ready,       
        phone,
        user_id
      },
    });

    return response.json(event);
  }
}