import { Router } from 'express'
import userRouter from './user/user.routes.js'
import authRouter from './auth/auth.route.js'

const rootRouter = Router()

rootRouter.use('/users', userRouter)
rootRouter.use('/auth', authRouter)

export default rootRouter
