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
  })

  return { code: 200, conversations }
}
const getConversation = async (SenderId, ReceiverId) => {
  const conversations = await Message.findAll({
    where: {
      SenderId,
      ReceiverId,
    },
  })

  return { code: 200, conversations }
}

export { getAll, getAllBySender, getConversation }
