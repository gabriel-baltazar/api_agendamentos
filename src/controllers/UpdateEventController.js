import { prismaClient } from "../database/prismaClient";
import transport from "../config/nodemailer";
import redisClient from "../config/redisConfig";

export class UpdateEventController {
  async handle(request, response) {
    const { name, image, event_date, location, phone, ready } = request.body;
    const { id } = request.params;
    const fileName = request.file.filename;
    const phoneNumber = parseInt(phone);
    const dateEvent = new Date(event_date);
    const userId = request.usuario.id
    const readyStatus = (ready=== 'true')

    const user = await prismaClient.users.findFirst({
      where:{
        id:userId
      }
    })

    //Config send email
    const mailOptions = {
      from: 'event@event.com',
      to: user.email,
      subject: `Evento confirmado`,
      html: `<h5>Seu evento "${name}", foi confirmado para a data ${dateEvent} </h5>`
    };

    try {
      const event = await prismaClient.events.update({
        where:{
          id
        },
        data: {
          name,        
          image: fileName,       
          event_date:dateEvent, 
          location,    
          ready: readyStatus,       
          phone: phoneNumber,
        },
      });

      await redisClient.set(id,event.image)

      if(ready){
        transport.sendMail(mailOptions,function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email enviado: ' + info.response);
          }
        });
      }
      return response.status(201).json({msg: "Evento atualizado com sucesso", event});
      
    } catch (err) {
      return response.status(400).json({
        error: 'Erro ao atualizar evento',
        err
      })
    }
  }
}