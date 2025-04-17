import { Router } from 'express'
import { userSkillController } from '../../controllers/index.controllers.js'

const userSkillRouter = Router()

userSkillRouter.post('/', userSkillController.createUserSkill)
userSkillRouter.get('/user/:id', userSkillController.getByUserId)

userSkillRouter.delete('/:id', userSkillController.deleteUserSkill)

export default userSkillRouter
