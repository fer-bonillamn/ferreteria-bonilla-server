import { iaService } from '../../services/index.services.js'

const evaluateApplicants = async (req, res) => {
  try {
    const data = req.body
    const { code, message, raw, responses } =
      await iaService.evaluateApplicants(data)

    if (code === 200) {
      return res.status(code).json({ responses })
    }
    res.status(code).json({ message, raw })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export default {
  evaluateApplicants,
}
