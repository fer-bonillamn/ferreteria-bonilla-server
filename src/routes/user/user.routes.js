import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'

const userRouter = Router()

userRouter.post('/register/with-google', userController.registerUserWithGoogle)
userRouter.post(
  '/auth/login/with-google',
  userController.registerUserWithGoogle
)

export default userRouter
