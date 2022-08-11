import { prismaClient } from "../database/prismaClient";

export class DeleteEventController {
  async handle(request, response) {
    const { id } = request.params;

    const event = await prismaClient.events.delete({
      where:{
        id
      }
    });

    return response.json(event);
  }
}