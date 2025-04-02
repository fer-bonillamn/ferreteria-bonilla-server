import { Message, User } from '../../database/database.js'

const userExits = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  })

  return user
}

const createMessage = async (data) => {
  const { SenderId, ReceiverId } = data
  const userSender = await userExits(SenderId)
  const userReceiver = await userExits(ReceiverId)

  if (!userSender || !userReceiver)
    return { code: 400, message: 'Usuarios no disponibles' }

  const messageSender = await Message.create(data)

  return messageSender
    ? { code: 201, message: 'Mensaje enviado' }
    : { code: 400, message: 'Error al enviar el mensaje' }
}

export { createMessage }
