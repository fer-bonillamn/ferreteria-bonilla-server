import { Router } from 'express'
import { userReferenceController } from '../../controllers/index.controllers.js'

const userReferenceRouter = Router()

userReferenceRouter.get('/user/:id', userReferenceController.getByUserId)
userReferenceRouter.post('/', userReferenceController.saveUserReference)
userReferenceRouter.delete('/:id', userReferenceController.deleteUserReference)

export default userReferenceRouter
