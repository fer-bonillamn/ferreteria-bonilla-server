import { Notification } from '../../database/database.js'

const getNotificationByUser = async (UserId) => {
  const notifications = await Notification.findAll({
    where: {
      UserId: UserId, // Filtra las notificaciones por el UserId
    },
    order: [
      ['createdAt', 'DESC'], // Ordena las notificaciones de forma descendente por la fecha de creación
    ],
  })

  return {
    code: 200,
    notifications,
  }
}

export { getNotificationByUser }
