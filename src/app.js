import express, { json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import rootRouter from './routes/root.routes.js'

const app = express()

app.use(cors())
app.use(json({ limit: '50mb' }))
app.use(cookieParser())
app.use(logger('dev'))

// ruta
app.use('/api/v1', rootRouter)

export default app
