import { request, response } from 'express'
import { codeService, userService } from '../../services/index.services.js'
import { bcryptUtil, codeUtil, jwtUtil } from '../../utils/index.utils.js'
import { nodemailerHelper } from '../../helpers/index.helpers.js'

const registerUser = async (req = request, res = response) => {
  try {
    const data = req.body
    const { password } = data

    const hashPassword = await bcryptUtil.hashPassword(password)

    const { code, message, user } = await userService.registerUser({
      ...data,
      password: hashPassword,
    })

    if (code === 201) {
      // Enviar mensaje con código de verificació
      const newCode = await codeUtil.createCode()
      const codeCreated = await codeService.createCode({
        type: 'Activación',
        code: newCode,
        UserId: user.id,
      })
      nodemailerHelper.activarCuenta(data.email, newCode)
      return res
        .status(code)
        .json({ message, expirationTime: codeCreated.expirationTime })
    }
    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      messagee: 'Error interno. Intente de nuevo más tarde.',
    })
  }
}
const registerUserWithGoogle = async (req = request, res = response) => {
  try {
    const data = req.body
    const { code, message, user } = await userService.registerUserWithGoogle({
      ...data,
      isVerified: true,
    })

    if (code === 201) {
      const { password, ...userInfo } = user
      const token = jwtUtil.generateToken({
        id: user.id,
        email: user.email,
        role: user.role,
      })

      return res.status(code).json({ user: userInfo, token })
    }
    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      messagee: 'Error interno. Intente de nuevo más tarde.',
    })
  }
}

export { registerUser, registerUserWithGoogle }
