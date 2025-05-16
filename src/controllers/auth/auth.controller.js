import { request, response } from 'express'
import { authService, codeService } from '../../services/index.services.js'
import { bcryptUtil, jwtUtil } from '../../utils/index.utils.js'
import { Code, User } from '../../database/database.js'
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

const changePassword = async (req, res) => {
  try {
    const { email, code, password } = req.body
    const user = await User.findOne({
      where: {
        email,
      },
    })
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    const { code: codeCode, message: msg } = await codeService.validateCode(
      email,
      code
    )
    if (codeCode === 200) {
      const codeFound = await Code.findOne({
        where: {
          UserId: user.id,
          type: 'Recuperación',
          code: code,
        },
      })

      codeFound.isValid = false
      await codeFound.save()
      const hashedPassword = await bcryptUtil.hashPassword(password)
      user.password = hashedPassword
      await user.save()
      return res.status(codeCode).json({ message: 'Contraseña actualizada' })
    }
    res.status(codeCode).json({ message: msg })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export default {
  loginWithGoogle,
  loginWithCredentials,
  changePassword,
}
