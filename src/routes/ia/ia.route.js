import { Router } from 'express'
import { iaController } from '../../controllers/index.controllers.js'
import { jwtMiddleware } from '../../middlewares/index.middlewares.js'

const iaRouter = Router()

iaRouter.post(
  '/evaluate/postulations',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAvailable,
  iaController.evaluateApplicants
)

export default iaRouter
