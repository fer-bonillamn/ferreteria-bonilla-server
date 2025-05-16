import { request, response } from 'express'
import { codeService } from '../../services/index.services.js'
import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { Code, User } from '../../database/database.js'
import { codeUtil } from '../../utils/index.utils.js'
import { is } from 'valibot'

const validateCode = async (req = request, res = response) => {
  try {
    const data = req.body
    const { code, message, email } = await codeService.validateCode(
      data.email,
      data.code
    )
    if (code === 200) {
      nodemailerHelper.confirmActivation(email)
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const createRecoveryCode = async (req, res) => {
  try {
    const { email } = req.body

    const user = await User.findOne({
      where: {
        email,
      },
    })
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
    await Code.destroy({
      where: {
        UserId: user.id,
        type: 'Recuperación',
      },
    })
    const newCode = await codeUtil.createCode()
    const codeCreated = await codeService.createCode({
      type: 'Recuperación',
      code: newCode,
      UserId: user.id,
    })
    nodemailerHelper.changePassword(email, newCode)
    res.status(200).json({
      message: 'Se ha enviado un correo con el codigo de recuperacion',
      expirationTime: codeCreated.expirationTime,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { validateCode, createRecoveryCode }
