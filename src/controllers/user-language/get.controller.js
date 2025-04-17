import { userLanguageService } from '../../services/index.services.js'

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const { code, userLanguages, message } =
      await userLanguageService.getByUserId(id)
    res.status(code).json(userLanguages ? { userLanguages } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUserId }
