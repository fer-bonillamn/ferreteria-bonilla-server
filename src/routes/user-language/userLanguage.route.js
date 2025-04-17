import { Router } from 'express'
import { userLanguageController } from '../../controllers/index.controllers.js'

const userLanguageRouter = Router()

userLanguageRouter.post('/', userLanguageController.saveUserLanguage)
userLanguageRouter.get('/user/:id', userLanguageController.getByUserId)
userLanguageRouter.delete('/:id', userLanguageController.deleteUserLanguage)

export default userLanguageRouter
