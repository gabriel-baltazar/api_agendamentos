import { prismaClient } from "../database/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginUserController {
  async handle(request, response) {
    const { email, password } = request.body 
    if( !email || !password ) {
      return response.status(400).json({
        error: 'Todos os campos são obrigatorios'
      })
    }

    const user = await prismaClient.users.findFirst({
      where:{
        email
      }
    })
    if(!user){
      return response.status(404).json({
        error: 'Usuário não encontrado!'
      })
    }

    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword){
      return response.status(400).json({
        error: 'Senha Inválida!'
      })
    }

    try {
      const secret = process.env.SECRET
      const token = jwt.sign({
        id: user.id

      }, secret,)

      response.status(200).json({ msg: "Autenticação realizada com sucesso",token})
      
    } catch (error) {
      console.log(error)
    }
  }
}