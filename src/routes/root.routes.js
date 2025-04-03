import { Router } from 'express'
import authRouter from './auth/auth.route.js'
import interestRouter from './interest/interest.route.js'
import messageRouter from './message/message.route.js'
import userRouter from './user/user.routes.js'
messageRouter
const rootRouter = Router()

rootRouter.use('/users', userRouter)
rootRouter.use('/auth', authRouter)
rootRouter.use('/messages', messageRouter)
rootRouter.use('/interests', interestRouter)

export default rootRouter
