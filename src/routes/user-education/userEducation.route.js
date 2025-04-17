import { Router } from 'express'
import { userEducationController } from '../../controllers/index.controllers.js'

const userEducationRouter = Router()

userEducationRouter.post('/', userEducationController.postUserEducation)
userEducationRouter.get('/user/:id', userEducationController.getByUserId)
userEducationRouter.delete('/:id', userEducationController.deleteUserEducation)

export default userEducationRouter
