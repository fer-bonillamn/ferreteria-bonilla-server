import { Message } from '../../database/database.js'

const deleteMessage = async (id) => {
  const messageDeleted = await Message.destroy({ where: { id } })
  return { code: 200, messageDeleted }
}

const deleteConversation = async (SenderId, ReceiverId) => {
  const messageDeleted = await Message.destroy({
    where: {
      SenderId,
      ReceiverId,
    },
  })
  return { code: 200, messageDeleted }
}

export { deleteMessage, deleteConversation }
