import { Message } from '../../database/database.js'

const deleteMessage = async (id) => {
  const messageDeleted = await Message.destroy({ where: { id } })
  return messageDeleted
    ? { code: 200, message: 'Mensaje eliminado' }
    : { code: 404, message: 'Mensaje no encontrado' }
}

const deleteConversation = async (SenderId, ReceiverId) => {
  const messageDeleted = await Message.destroy({
    where: {
      SenderId,
      ReceiverId,
    },
  })

  return messageDeleted
    ? { code: 200, message: 'Conversacion eliminada' }
    : { code: 404, message: 'Conversacion no encontrada' }
}

export { deleteMessage, deleteConversation }
