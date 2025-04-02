import { Router } from 'express'
import { messageController } from '../../controllers/index.controllers.js'

const messageRouter = Router()

messageRouter.post('/create', messageController.createMessage)
messageRouter.get('/all', messageController.getAll)
messageRouter.get('/all/:SenderId', messageController.getAllBySender)
messageRouter.get(
  '/conversation/:SenderId/:ReceiverId',
  messageController.getConversation
)
messageRouter.delete(
  '/conversation/:SenderId/:ReceiverId',
  messageController.deleteConversation
)
messageRouter.delete('/message/:id', messageController.deleteMessage)

export default messageRouter
