import { Router } from 'express'
import { messageController } from '../../controllers/index.controllers.js'
import jwtMiddleware from '../../middlewares/jwt/jwt.middleware.js'

const messageRouter = Router()

messageRouter.post('/', messageController.createMessage)
messageRouter.get('/all', messageController.getAll)
messageRouter.get('/all/:SenderId', messageController.getAllBySender)
messageRouter.get('/conversation', messageController.getConversation)
// messageRouter.delete(
//   '/conversation/:SenderId/:ReceiverId',
//   messageController.deleteConversation
// )
messageRouter.delete('/message/:id', messageController.deleteMessage)

messageRouter.put(
  '/conversation',
  jwtMiddleware.validateJWT,
  messageController.markAsRead
)

export default messageRouter
