import jwt from "jsonwebtoken";

export function checkToken(request, response, next){
  const authHeader = request.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if(!token){
    return response.status(401).json({ msg: 'Acesso negado!' })
  }

  try {
    const secret = process.env.SECRET

    const decoded = jwt.verify(token, secret)
    request.usuario = decoded
    next()
  } catch (error) {
    if(error.name === 'TokenExpiredError'){
      return response.status(401).json({ msg: 'Token expirado!' })
    }
    return response.status(401).json({ msg: 'Token inválido!' })
  }
}