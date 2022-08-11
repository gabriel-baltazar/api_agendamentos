import { prismaClient } from "../database/prismaClient";

export class PrivateController {
  async handle(request, response) {
    const id = request.params.id
  
    const user = await prismaClient.users.findFirst({
      where:{
        id
      },
      select: {
        id: true,
        name: true,
        email: true,
        active: true
      }
    })
    if(!user){
      return response.status(404).json({
        error: 'Usuário não encontrado!'
      })
    }
    response.status(200).json({msg:user})
  }
}