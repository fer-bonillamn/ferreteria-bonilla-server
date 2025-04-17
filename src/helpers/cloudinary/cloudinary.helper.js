import { v2 as cloudinary } from 'cloudinary'
import stream from 'stream'
import {
  CLOUDINARY_API_SECRET,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
} from '../../config/config.js'

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
})

const uploadFile = async (folder, fileBuffer, fileName) => {
  // Creamos un stream de lectura a partir del buffer
  const bufferStream = new stream.PassThrough()
  bufferStream.end(fileBuffer) // Pasamos el buffer al stream

  return new Promise((resolve, reject) => {
    // Usamos el método upload_stream de Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `bonilla/${folder}`,
        overwrite: true,
        public_id: fileName,
      },
      (error, result) => {
        if (error) {
          reject(
            new Error('Error uploading image to Cloudinary: ' + error.message)
          )
        } else {
          resolve(result.secure_url)
        }
      }
    )

    // Pasamos el stream al uploader de Cloudinary
    bufferStream.pipe(uploadStream)
  })
}

const uploadPdf = async (folder, fileBuffer, fileName) => {
  const bufferStream = new stream.PassThrough()
  bufferStream.end(fileBuffer)

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `bonilla/${folder}`,
        overwrite: true,
        public_id: fileName, // Usamos el nombre del archivo tal cual
        resource_type: 'raw', // Usamos 'raw' para archivos que no son imágenes ni videos
      },
      (error, result) => {
        if (error) {
          reject(
            new Error('Error uploading PDF to Cloudinary: ' + error.message)
          )
        } else {
          resolve(result) // URL segura del archivo subido
        }
      }
    )

    bufferStream.pipe(uploadStream)
  })
}

const deletePdf = async (publicId) => {
  cloudinary.uploader
    .destroy(publicId, { resource_type: 'raw' })
    .then((res) => {
      return {
        code: 200,
        message: 'Documento eliminado',
      }
    })
    .catch((err) => {
      return {
        code: 400,
        message: 'Error al eliminar el documento',
      }
    })
}
export default { uploadFile, uploadPdf, deletePdf }
