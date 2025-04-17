import { User } from '../../database/database.js'
import { existByEmail, existByPhone, existBySub } from './validator.service.js'

const registerUser = async (data) => {
  const { email, phone, dni } = data

  if (await existByEmail(email))
    return { code: 400, message: 'Email no disponible' }

  if (phone && (await existByPhone(phone)))
    return { code: 400, message: 'Teléfono no disponible' }

  if (dni && (await existByPhone(dni)))
    return { code: 400, message: 'DNI no disponible' }

  const newUser = await User.create(data)

  return newUser
    ? { code: 201, message: 'Usuario registrado', user: newUser }
    : { code: 400, message: 'Usuario no registrado. Intente de nuevo.' }
}

const registerUserWithGoogle = async (data) => {
  const { sub } = data
  if (await existBySub(sub))
    return { code: 400, message: 'Usuario ya registrado' }

  const newUser = await User.create(data)
  return newUser
    ? { code: 201, message: 'Usuario registrado', user: newUser.dataValues }
    : { code: 400, message: 'Usuario no registrado. Intente de nuevo.' }
}

export { registerUser, registerUserWithGoogle }
