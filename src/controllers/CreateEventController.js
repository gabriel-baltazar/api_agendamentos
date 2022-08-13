import { prismaClient } from "../database/prismaClient";
import transport from "../config/nodemailer";

export class CreateEventController {
  async handle(request, response) {
    const { name, image, event_date, location, phone } = request.body;
    const fileName = request.file.filename;
    const phoneNumber = parseInt(phone);
    const date = new Date();
    const dateEvent = new Date(event_date);
    const diff = dateEvent.getTime() - date.getTime();
    const diffHours = diff / (1000 * 3600);
    const ready = diffHours < 48 ? true : false;
    const userId = request.usuario.id

    //Config send email
    const mailOptions = {
      from: 'event@event.com',
      to: 'teste@teste.com',
      subject: `Evento confirmado`,
      html: `<h5>Seu evento "${name}", foi confirmado para a data ${dateEvent} </h5>`
    };

    try{
      const event = await prismaClient.events.create({
        data: {
          name,        
          image: fileName,       
          event_date:dateEvent, 
          location,    
          ready: ready,       
          phone: phoneNumber,
          user_id: userId
        },
      });
      if(ready){
        transport.sendMail(mailOptions,function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email enviado: ' + info.response);
          }
        });
      }
    
      return response.status(201).json({msg: "Evento criado com sucesso", event}); 

    }catch(err){
      return response.status(400).json({
        error: 'Erro ao criar evento',
        err
      })
    }
  }
}