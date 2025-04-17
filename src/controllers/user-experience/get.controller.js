import { userExperienceService } from '../../services/index.services.js'

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, userExperiences } =
      await userExperienceService.getByUserId(id)
    res.status(code).json(userExperiences ? { userExperiences } : { message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUserId }
