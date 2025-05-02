import { jobApplicationService } from '../../services/index.services.js'

const applyJob = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await jobApplicationService.createJobApplication(
      data
    )
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export { applyJob }
