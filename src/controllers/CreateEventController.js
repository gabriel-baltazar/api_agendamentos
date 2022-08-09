import { prismaClient } from "../database/prismaClient";

export class CreateEventController {
  async handle(request, response) {
    const { name, image, event_date, location, ready, phone, user_id } = request.body;

    const event = await prismaClient.events.create({
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