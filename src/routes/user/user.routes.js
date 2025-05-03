import { Router } from 'express'
import { userController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const userRouter = Router()

userRouter.get('/:id', userController.getById)

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

// Admin routes
userRouter.get(
  '/all/users',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAvailable,
  userController.getAllUsers
)

userRouter.put(
  '/validate-account/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  userController.updateValidation
)

userRouter.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  userController.deleteUser
)

userRouter.put(
  '/update-password/:id',
  jwtMiddleware.validateJWT,
  userController.updatePassword
)

export default userRouter
