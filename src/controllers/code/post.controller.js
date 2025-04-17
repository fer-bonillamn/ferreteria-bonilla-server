import { request, response } from 'express'
import { codeService } from '../../services/index.services.js'
import { nodemailerHelper } from '../../helpers/index.helpers.js'

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

export { validateCode }
