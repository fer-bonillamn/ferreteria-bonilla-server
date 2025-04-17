import { userLanguageService } from '../../services/index.services.js'

const saveUserLanguage = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await userLanguageService.saveUserLanguage(data)
    res.status(code).json({ message })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { saveUserLanguage }
