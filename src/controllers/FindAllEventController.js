import { prismaClient } from "../database/prismaClient";

export class FindAllEventController {
  async handle(request, response) {

    const event = await prismaClient.events.findMany();

    return response.json(event);
  }
}