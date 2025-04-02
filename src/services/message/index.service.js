import { createMessage } from './post.service.js'
import { getAll, getAllBySender, getConversation } from './get.service.js'
import { deleteConversation, deleteMessage } from './delete.service.js'
export default {
  createMessage,
  deleteConversation,
  deleteMessage,
  getAll,
  getAllBySender,
  getConversation,
}
