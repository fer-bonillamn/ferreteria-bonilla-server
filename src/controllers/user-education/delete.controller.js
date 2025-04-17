import { userEducationService } from '../../services/index.services.js'

const deleteUserEducation = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await userEducationService.deleteUserEducation(id)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export default deleteUserEducation
