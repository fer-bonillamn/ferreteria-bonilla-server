import { resumeService } from '../../services/index.services.js'

const getByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, resume, message } = await resumeService.getByUser(id)
    res.status(code).json(resume ? { resume } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUser }
