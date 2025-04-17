import { nodemailerHelper } from '../../helpers/index.helpers.js'
import { codeService } from '../../services/index.services.js'
import { codeUtil } from '../../utils/index.utils.js'

const updateCode = async (req, res) => {
  try {
    const { email, type } = req.body

    const newCode = await codeUtil.createCode()
    const codeUpdated = await codeService.updateCode(email, type, newCode)
    nodemailerHelper.activarCuenta(email, newCode)
    res.status(200).json({ expirationTime: codeUpdated.expirationTime })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { updateCode }
