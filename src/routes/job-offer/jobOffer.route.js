import { Router } from 'express'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'
import { jobOfferController } from '../../controllers/index.controllers.js'

const jobOfferRouter = Router()

jobOfferRouter.post(
  '/',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAvailable,
  jobOfferController.createJobOffer
)
jobOfferRouter.get('/', jwtMiddleware.validateJWT, jobOfferController.getAll)
jobOfferRouter.get(
  '/:id',
  jwtMiddleware.validateJWT,
  jobOfferController.getById
)

jobOfferRouter.delete(
  '/:id',
  jwtMiddleware.validateJWT,
  jwtMiddleware.isAdmin,
  jobOfferController.deleteJobOffer
)

jobOfferRouter.get(
  '/branch/:id',
  jwtMiddleware.validateJWT,
  jobOfferController.getByBranchId
)

jobOfferRouter.get(
  '/by-employee/:id',
  jwtMiddleware.validateJWT,
  jobOfferController.getByEmployee
)

export default jobOfferRouter
