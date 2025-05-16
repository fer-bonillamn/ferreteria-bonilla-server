import { Notification } from '../../database/database.js'

const markRead = async (id) => {
  const notification = await Notification.findOne({
    where: {
      id: id,
    },
  })
  notification.isRead = true
  await notification.save()
  return { code: 200, message: 'Notificacion marcada como leida' }
}


export { markRead }
