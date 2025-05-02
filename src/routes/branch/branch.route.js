import { Router } from 'express'
import { branchController } from '../../controllers/index.controllers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const branchRouter = Router()

branchRouter.get('/', branchController.getAllBranches)

branchRouter.post(
  '/',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  branchController.createBranch
)

branchRouter.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  branchController.deleteBranch
)

branchRouter.get('/:id', jwtMiddleware.validateJWT, branchController.getById)
branchRouter.put(
  '/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  branchController.updateBranch
)

export default branchRouter
