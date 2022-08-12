import { prismaClient } from "../database/prismaClient";

export class DeleteEventController {
  async handle(request, response) {
    const { id } = request.params;


    try {
      const event = await prismaClient.events.delete({
        where:{
          id
        }
      });
      return response.status(200).json({ msg: "Evento deletado", event });
    } catch (error) {
      return response.status(400).json({ error: "Erro ao deletar evento" });
    }
  }
}