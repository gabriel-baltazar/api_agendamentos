import { prismaClient } from "../database/prismaClient";

export class FindEventController {
  async handle(request, response) {
    const { id } = request.params;

    const event = await prismaClient.events.findFirst({
      where: {
        id,
      },
    });

    return response.json(event);
  }
}