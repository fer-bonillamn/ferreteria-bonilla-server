import { Router } from 'express'
import { codeController } from '../../controllers/index.controllers.js'

const codeRouter = Router()

codeRouter.post('/validate', codeController.validateCode)
codeRouter.put('/update', codeController.updateCode)

export default codeRouter
