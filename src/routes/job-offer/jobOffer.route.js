import { Router } from 'express'
import { jobOfferService } from '../../services/index.services.js'

const jobOfferRouter = Router()

jobOfferRouter.get('/', jobOfferService.getAll)

export default jobOfferRouter
