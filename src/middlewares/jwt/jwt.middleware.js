import { request, response } from 'express'
import { User } from '../../database/database.js'
import { jwtUtil } from '../../utils/index.utils.js'

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header('x-token')
  if (!token)
    return res.status(401).json({
      message: 'Petición denegada. No hay token en la petición',
    })

  try {
    const { id } = jwtUtil.verifyToken(token)
    if (!id)
      return res.status(401).json({
        message: 'Petición denegada. Token inválido',
      })

    const user = await User.findOne({
      where: {
        id,
      },
    })

    if (!user)
      return res.status(401).json({
        message: 'Petición denegada. Usuario no válido.',
      })

    if (!user.isVerified)
      return res.status(401).json({
        message: 'Petición denegada. Usuario no válido.',
      })

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({
      message: 'Petición denegada. Token no válido',
    })
  }
}

const isAdmin = async (req = request, res = response, next) => {
  if (!req.user)
    return res.status(401).json({
      message: 'Petición denegada. Token no encontrado.',
    })

  const { name, role } = req.user

  if (role !== 'Administrador') {
    return res.status(401).json({
      message:
        'Petición denegada. No cuentas con los permisos para esta acción',
    })
  }

  next()
}

const isAvailable = async (req = request, res = response, next) => {
  if (!req.user)
    return res.status(401).json({
      message: 'Petición denegada. Token no encontrado.',
    })

  const { name, role } = req.user

  if (role !== 'Administrador' && role !== 'Reclutador' && role !== 'Gerente') {
    return res.status(401).json({
      message:
        'Petición denegada. No cuentas con los permisos para esta acción',
    })
  }

  next()
}

export default {
  validateJWT,
  isAdmin,
  isAvailable,
}
