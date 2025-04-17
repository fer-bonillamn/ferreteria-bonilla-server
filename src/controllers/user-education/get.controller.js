import { userEducationService } from '../../services/index.services.js'

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const { code, userEducations, message } =
      await userEducationService.getByUserId(id)
    res.status(code).json(userEducations ? { userEducations } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUserId }
