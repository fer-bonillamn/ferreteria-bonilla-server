import { postNotification, postNotifications } from './post.service.js'
import { getNotificationByUser } from './get.service.js'
import { markRead } from './put.service.js'
export default {
  postNotifications,
  postNotification,
  getNotificationByUser,
  markRead,
}
