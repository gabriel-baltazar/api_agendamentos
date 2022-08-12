import { prismaClient } from "../database/prismaClient";
import bcrypt from "bcrypt";

export class CreateUserController {
  async handle(request, response) {
    const { name, email, password, confirmPassword } = request.body 
    if( !name || !email || !password || !confirmPassword ) {
      return response.status(400).json({
        error: 'Todos os campos são obrigatorios'
      })
    }
    if( password !== confirmPassword ) {
      return response.status(400).json({
        error: 'As senhas não conferem!'
      })
    }

    // Validate user exists
    const userExists = await prismaClient.users.findFirst({
      where:{
        email
      }
    })
    if(userExists){
      return response.status(400).json({
        error: 'Usuário já existe! Utilize outro email'
      })
    }

    // Create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password,salt)


    try {
      // Create user
      const user = await prismaClient.users.create({
        data:{
          name,
          email,
          password:passwordHash
        }
      })
      return response.status(201).json({msg:"Usuário criado com sucesso"});
    } catch (error) {
      return response.status(400).json({
        error: 'Erro ao criar usuário'
      })
    }
    

    

  }
}