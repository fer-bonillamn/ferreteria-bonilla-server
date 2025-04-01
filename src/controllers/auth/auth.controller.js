import { request, response } from 'express'
import { authService } from '../../services/index.services.js'
import { jwtUtil } from '../../utils/index.utils.js'

const loginWithGoogle = async (req = request, res = response) => {
  try {
    const { sub } = req.body
    const { code, message, user } = await authService.loginWithGoogle(sub)

    if (user) {
      const token = jwtUtil.generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      })
      return res.status(code).json({ user, token })
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}
const loginWithCredentials = async (req = request, res = response) => {
  try {
    const { email, password } = req.body
    const { code, message, user } = await authService.loginWithCredentials(
      email,
      password
    )
    if (user) {
      const token = jwtUtil.generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      })
      return res.status(code).json({ user, token })
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export default {
  loginWithGoogle,
  loginWithCredentials,
}
