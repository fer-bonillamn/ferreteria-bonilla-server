import { Router } from 'express'
import { interestController } from '../../controllers/index.controllers.js'

const interestRouter = Router()

interestRouter.post('/', interestController.createInterest)

export default interestRouter
