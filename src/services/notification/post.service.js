import { Notification } from '../../database/database.js'

const postNotifications = async (data) => {
  const newNotification = await Notification.bulkCreate(data)
  return newNotification ? { code: 201 } : { code: 400 }
}

const postNotification = async (data) => {
  const newNotification = await Notification.create(data)
  return newNotification ? { code: 201 } : { code: 400 }
}

export { postNotifications, postNotification }
