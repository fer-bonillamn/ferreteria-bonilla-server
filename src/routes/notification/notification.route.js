import { Router } from 'express'
import { notificationController } from '../../controllers/index.controllers.js'

const notificationRouter = Router()

notificationRouter.get('/:id', notificationController.getAllByUser)

export default notificationRouter
