import { prismaClient } from "../database/prismaClient";

export class CreateEventController {
  async handle(request, response) {
    const { name, image, event_date, location, phone, user_id } = request.body;
    const fileName = request.file.filename;
    const phoneNumber = parseInt(phone);
    const date = new Date();
    const dateEvent = new Date(event_date);
    const diff = dateEvent.getTime() - date.getTime();
    const diffHours = diff / (1000 * 3600);
    const ready = diffHours < 48 ? true : false;

    try{
      const event = await prismaClient.events.create({
        data: {
          name,        
          image: fileName,       
          event_date:dateEvent, 
          location,    
          ready: ready,       
          phone: phoneNumber,
          user_id
        },
      });
      return response.status(201).json({msg: "Evento criado com sucesso", event}); 

    }catch(err){
      return response.status(400).json({
        error: 'Erro ao criar evento',
        err
      })
    }
  }
}

function verifyDate(eventDate){
  
}