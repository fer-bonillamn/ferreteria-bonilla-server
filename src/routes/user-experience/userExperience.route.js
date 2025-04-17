import { Router } from 'express'
import { userExperienceController } from '../../controllers/index.controllers.js'

const userExperienceRouter = Router()

userExperienceRouter.post('/', userExperienceController.saveUserExperience)
userExperienceRouter.get('/user/:id', userExperienceController.getByUserId)
userExperienceRouter.delete(
  '/:id',
  userExperienceController.deleteUserExperience
)

export default userExperienceRouter
