import { userExperienceService } from '../../services/index.services.js'

const saveUserExperience = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await userExperienceService.saveUserExperience(
      data
    )
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { saveUserExperience }
