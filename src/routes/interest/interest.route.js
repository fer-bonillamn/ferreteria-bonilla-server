import { Router } from 'express'
import { interestController } from '../../controllers/index.controllers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const interestRouter = Router()

interestRouter.get(
  '/user/:id',
  jwtMiddleware.validateJWT,
  interestController.getByUserId
)

interestRouter.post(
  '/',
  jwtMiddleware.validateJWT,
  interestController.createInterest
)

interestRouter.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  interestController.deleteInterest
)

export default interestRouter
