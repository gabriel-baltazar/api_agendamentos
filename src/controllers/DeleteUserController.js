import { prismaClient } from "../database/prismaClient";

export class DeleteUserController {
  async handle(request, response) {
    const { email } = request.body;
  
    await prismaClient.users.update({
      where:{
        email,
      },
      data:{
        active: false
      }
    });

    return response.status(200).json({msg: "Usuário desativado com sucesso"});
  }
}