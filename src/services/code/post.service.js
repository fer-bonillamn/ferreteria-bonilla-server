import { Code, User } from '../../database/database.js'

const validateCode = async (email, code) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado' }
  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      code,
    },
  })
  if (!codeFound) return { code: 404, message: 'Código no encontrado' }

  if (codeFound.expirationTime < new Date()) {
    return { code: 404, message: 'Este código ya ha expirado' }
  }
  if (!codeFound.isValid) {
    return { code: 404, message: 'Este código ya ha sido utilizado' }
  }

  user.isVerified = true
  codeFound.isValid = false
  await codeFound.save()
  await user.save()
  return { code: 200, message: 'Cuenta verificada correctamente', email }
}

const createCode = async (data) => {
  const { type, UserId, code } = data
  const expirationTime = new Date()
  expirationTime.setMinutes(expirationTime.getMinutes() + 3)

  const newCode = await Code.create({
    code,
    type,
    expirationTime,
    UserId,
  })
  return newCode.dataValues
}

export { createCode, validateCode }
