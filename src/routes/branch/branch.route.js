import { Router } from 'express'
import { branchController } from '../../controllers/index.controllers.js'

const branchRouter = Router()

branchRouter.get('/', branchController.getAllBranches)

export default branchRouter
