import { Router } from 'express'
import { jobApplicationController } from '../../controllers/index.controllers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const jobApplicationRouter = Router()

jobApplicationRouter.post(
  '/',
  jwtMiddleware.validateJWT,
  jobApplicationController.applyJob
)

jobApplicationRouter.get('/user/:id', jobApplicationController.getByUser)
jobApplicationRouter.get(
  '/all',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAvailable,
  jobApplicationController.getAll
)

jobApplicationRouter.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  jobApplicationController.deleteJobApplication
)

jobApplicationRouter.put(
  '/accept/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAvailable,
  jobApplicationController.acceptJobApplication
)

jobApplicationRouter.put(
  '/reject/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAvailable,
  jobApplicationController.rejectJobApplication
)

export default jobApplicationRouter
