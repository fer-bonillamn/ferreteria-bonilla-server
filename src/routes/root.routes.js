import { Router } from 'express'
import userRouter from './user/user.routes.js'
import authRouter from './auth/auth.route.js'
import messageRouter from './message/message.route.js'
messageRouter
const rootRouter = Router()

rootRouter.use('/users', userRouter)
rootRouter.use('/auth', authRouter)
rootRouter.use('/messages', messageRouter)

export default rootRouter
