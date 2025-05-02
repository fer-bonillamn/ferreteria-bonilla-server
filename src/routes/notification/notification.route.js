import { Router } from 'express'
import { notificationController } from '../../controllers/index.controllers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const notificationRouter = Router()

notificationRouter.get('/:id', notificationController.getAllByUser)
notificationRouter.put(
  '/:id',
  jwtMiddleware.validateJWT,
  notificationController.markAsRead
)

export default notificationRouter
