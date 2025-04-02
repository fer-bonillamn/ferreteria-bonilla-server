import 'dotenv/config'

const {
  PORT = 3000,
  LOCAL_DATABASE_URI,
  SECRET_WORD,
  CLOUDINARY_API_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
} = process.env

export {
  LOCAL_DATABASE_URI,
  PORT,
  SECRET_WORD,
  CLOUDINARY_API_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
}
