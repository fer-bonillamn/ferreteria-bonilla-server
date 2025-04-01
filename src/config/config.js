import 'dotenv/config'

const { PORT = 3000, LOCAL_DATABASE_URI, SECRET_WORD } = process.env

export { PORT, LOCAL_DATABASE_URI, SECRET_WORD }
