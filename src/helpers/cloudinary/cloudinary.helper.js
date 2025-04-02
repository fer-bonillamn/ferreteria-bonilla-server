import { v2 as cloudinary } from 'cloudinary'
import stream from 'stream'

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
          resolve(result.secure_url) // URL segura del archivo subido
        }
      }
    )

    bufferStream.pipe(uploadStream)
  })
}

export default { uploadFile, uploadPdf }
