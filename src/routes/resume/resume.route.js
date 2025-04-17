import { Router } from 'express'
import { resumeController } from '../../controllers/index.controllers.js'
import { multerHelper } from '../../helpers/index.helpers.js'

const resumeRouter = Router()

resumeRouter.get('/user/:id', resumeController.getByUser)
resumeRouter.post(
  '/upload/:id',
  multerHelper.upload.single('resume'),
  resumeController.saveResume
)

resumeRouter.delete('/:id', resumeController.deleteResume)

export default resumeRouter
