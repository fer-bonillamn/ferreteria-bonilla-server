import { jobApplicationService } from '../../services/index.services.js'

const getByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, jobApplications } = await jobApplicationService.getByUserId(
      id
    )
    res.status(code).json({ jobApplications })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUser }
