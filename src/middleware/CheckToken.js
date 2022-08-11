import  jwt  from "jsonwebtoken";

export function checkToken(request, response, next){
  const authHeader = request.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if(!token){
    return response.status(401).json({ msg: 'Acesso negado!' })
  }

  try {
    const secret = process.env.SECRET

    jwt.verify(token, secret)

    next()
  } catch (error) {
    response.status.json({ msg: 'Token inválido!' })
  }
}