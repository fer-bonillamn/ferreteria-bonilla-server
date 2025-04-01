import { request, response } from 'express'
import { userService } from '../../services/index.services.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const registerUser = async (req = request, res = response) => {
  try {
    const data = req.body
    const { password } = data

    const hashPassword = await bcryptUtil.hashPassword(password)

    const { code, message } = await userService.registerUser({
      ...data,
      password: hashPassword,
    })
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      messagee: 'Error interno. Intente de nuevo más tarde.',
    })
  }
}
const registerUserWithGoogle = async (req = request, res = response) => {
  try {
    const data = req.body
    const { code, message } = await userService.registerUserWithGoogle({
      ...data,
      isVerified: true,
    })
    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      messagee: 'Error interno. Intente de nuevo más tarde.',
    })
  }
}

export { registerUser, registerUserWithGoogle }
