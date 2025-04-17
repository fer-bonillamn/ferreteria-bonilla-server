import { cloudHelper } from '../../helpers/index.helpers.js'
import { resumeService } from '../../services/index.services.js'

const saveResume = async (req, res) => {
  try {
    const file = req.file
    const { id } = req.params

    const result = await cloudHelper.uploadPdf(
      'resumes',
      file.buffer,
      `cv-${file.originalname}`
    )

    const { secure_url, public_id } = result

    const { code, message } = await resumeService.postResume({
      UserId: id,
      url: secure_url,
      publicId: public_id,
    })

    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { saveResume }
