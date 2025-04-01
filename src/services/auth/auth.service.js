import { User } from '../../database/database.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const loginWithGoogle = async (sub) => {
  const user = await User.findOne({
    where: {
      sub,
    },
    attributes: {
      exclude: ['password'],
    },
  })

  if (!user) return { code: 401, message: 'Usuario no registrado.' }
  return { code: 200, user }
}
const loginWithCredentials = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })

  if (!user)
    return { code: 401, message: 'Acceso denegado. Usuario no encontrado.' }

  if (!user.isVerified)
    return { code: 401, message: 'Acceso denegado. Cuenta no verificada.' }

  const { password: hashed, ...userData } = user

  const isValid = bcryptUtil.comparePassword(password, hashed)
  if (!isValid)
    return { code: 401, message: 'Acceso denegado. Credenciales incorrectas' }

  return { code: 200, user: userData }
}

export default {
  loginWithCredentials,
  loginWithGoogle,
}
