import { Op } from 'sequelize'
import { Message, User } from '../../database/database.js'

const getAll = async () => {
  const conversations = await Message.findAll()
  return { code: 200, conversations }
}
const getAllBySender = async (SenderId) => {
  const conversations = await Message.findAll({
    where: {
      [Op.or]: [{ SenderId }, { ReceiverId: SenderId }],
    },
    include: [
      { model: User, as: 'Sender' },
      { model: User, as: 'Receiver' },
    ],
    order: [['senderAt', 'DESC']], // 👈 Ordenar por fecha (más reciente primero)
  })

  return { code: 200, conversations }
}
const getConversation = async (senderId, receiverId) => {
  const conversations = await Message.findAll({
    where: {
      [Op.or]: [
        { SenderId: senderId, ReceiverId: receiverId },
        { SenderId: receiverId, ReceiverId: senderId },
      ],
    },
    include: [
      { model: User, as: 'Sender' },
      { model: User, as: 'Receiver' },
    ],
    order: [['senderAt', 'ASC']], // Ordena por fecha si quieres el hilo cronológico
  })

  return { code: 200, conversations }
}

export { getAll, getAllBySender, getConversation }
