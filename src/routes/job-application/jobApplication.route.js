import { Router } from 'express'
import { jobApplicationController } from '../../controllers/index.controllers.js'

const jobApplicationRouter = Router()

jobApplicationRouter.get('/user/:id', jobApplicationController.getByUser)

export default jobApplicationRouter
