import { Op } from 'sequelize'
import { Message } from '../../database/database.js'

const markAsRead = async (data, senderId, receiverId) => {
  const message = await Message.update(data, {
    where: {
      [Op.or]: [{ SenderId: senderId, ReceiverId: receiverId }],
    },
  })
  return { code: 200, message }
}

export { markAsRead }
