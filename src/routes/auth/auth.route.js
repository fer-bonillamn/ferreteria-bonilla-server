import { Router } from 'express'
import { authController } from '../../controllers/index.controllers.js'

const authRouter = Router()

authRouter.post('/login/with-google', authController.loginWithGoogle)
authRouter.post('/login/with-credentials', authController.loginWithCredentials)
authRouter.put('/change-password', authController.changePassword)
export default authRouter
