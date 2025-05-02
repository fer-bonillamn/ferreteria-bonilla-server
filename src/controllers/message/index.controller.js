import { createMessage } from './post.controller.js'
import { getAll, getAllBySender, getConversation } from './get.controller.js'
import { deleteConversation, deleteMessage } from './delete.controller.js'
import { markAsRead } from './put.controller.js'

export default {
  createMessage,
  deleteConversation,
  deleteMessage,
  getAll,
  getAllBySender,
  getConversation,
  markAsRead,
}
