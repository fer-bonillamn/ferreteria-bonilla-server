import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'

const userRouter = Router()

userRouter.post('/register', userController.registerUser)
userRouter.post('/register/with-google', userController.registerUserWithGoogle)
userRouter.post(
  '/auth/login/with-google',
  userController.registerUserWithGoogle
)

// Update info with image
userRouter.put(
  '/update/with-image/:id',
  multerHelper.upload.single('profilePicture'),
  userController.updateUserWithImage
)

// Update info without image
userRouter.put(
  '/update/without-image/:id',
  multerHelper.upload.none(),
  userController.updateUserWithoutImage
)

export default userRouter
