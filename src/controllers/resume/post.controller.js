import { cloudHelper } from '../../helpers/index.helpers.js'
import { resumeService } from '../../services/index.services.js'
import extract from 'pdf-text-extract'
import tmp from 'tmp'
import fs from 'fs/promises'

const extractTextFromPdfBuffer = async (buffer) => {
  return new Promise(async (resolve, reject) => {
    const tmpFile = tmp.fileSync({ postfix: '.pdf' })
    const tmpPath = tmpFile.name

    try {
      await fs.writeFile(tmpPath, buffer)

      extract(tmpPath, (err, pages) => {
        tmpFile.removeCallback() // borra el archivo temporal

        if (err) return reject(err)

        const fullText = pages.join('\n')
        resolve(fullText)
      })
    } catch (err) {
      tmpFile.removeCallback()
      reject(err)
    }
  })
}

const saveResume = async (req, res) => {
  try {
    const file = req.file
    const { id } = req.params

    // Extraer texto del PDF (usando archivo temporal)
    const parsedText = await extractTextFromPdfBuffer(file.buffer)

    // Subir a Cloudinary (o lo que use tu helper)
    const result = await cloudHelper.uploadPdf(
      'resumes',
      file.buffer,
      `cv-${file.originalname}`
    )

    const { secure_url, public_id } = result

    // Guardar en base de datos
    const { code, message } = await resumeService.postResume({
      UserId: id,
      url: secure_url,
      publicId: public_id,
      parsedResume: parsedText,
    })

    res.status(code).json({ message })
  } catch (error) {
    console.error('Error al guardar el CV:', error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { saveResume }
