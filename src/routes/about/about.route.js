import { Router } from 'express'
import { aboutController } from '../../controllers/index.controllers.js'

const aboutRouter = Router()

aboutRouter.get('/user/:id', aboutController.getByUserId)
aboutRouter.post('/', aboutController.saveAbout)
aboutRouter.put('/:id', aboutController.updateAbout)

export default aboutRouter
