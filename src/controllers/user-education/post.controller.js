import { userEducationService } from '../../services/index.services.js'

const postUserEducation = async (req, res) => {
  try {
    const data = req.body
    const { endYear } = data
    if (!endYear) data.isCurrent = true
    const { code, message } = await userEducationService.postUserEducation(data)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { postUserEducation }
