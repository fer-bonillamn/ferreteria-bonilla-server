import { Router } from 'express'
import { employeeController } from '../../controllers/index.controllers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const employeeRouter = Router()

employeeRouter.get(
  '/all',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  employeeController.getAll
)

employeeRouter.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  employeeController.deleteEmployee
)

employeeRouter.post(
  '/',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  employeeController.createEmployee
)

export default employeeRouter
