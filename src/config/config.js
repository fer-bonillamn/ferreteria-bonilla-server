import 'dotenv/config'
import { bcryptUtil } from '../utils/index.utils.js'

const {
  PORT = 3000,
  LOCAL_DATABASE_URI,
  SECRET_WORD,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
  GMAIL_USER,
  GMAIL_PASSWORD,
  ADMIN_PASSWORD,
  OPENAI_API_KEY,
  HF_API_TOKEN,
} = process.env

const NODEMAILER_CONFIG = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
}

export {
  LOCAL_DATABASE_URI,
  PORT,
  SECRET_WORD,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
  NODEMAILER_CONFIG,
  ADMIN_PASSWORD,
  OPENAI_API_KEY,
  HF_API_TOKEN,
}
