import jwt from 'jsonwebtoken'
import { SECRET_WORD } from '../../config/config.js'

const { sign, verify } = jwt

const generateToken = (data) => {
  const token = sign(data, SECRET_WORD, { expiresIn: '3h' })
  return token
}

const verifyToken = (token) => {
  return verify(token, SECRET_WORD)
}

export default {
  generateToken,
  verifyToken,
}
