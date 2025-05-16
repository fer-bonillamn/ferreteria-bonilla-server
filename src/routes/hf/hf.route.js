import { Router } from 'express'
import { hfControllers } from '../../controllers/index.controllers.js'

const hfRouter = Router()

hfRouter.post('/evaluate-applicants', hfControllers.evaluateApplicants)

export default hfRouter
