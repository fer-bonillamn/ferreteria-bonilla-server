import { Notification, Interest } from '../../database/database.js'

const interestExists = async (UserId, BranchId) => {
  const interest = await Interest.findOne({
    where: {
      UserId,
      BranchId,
    },
  })
  return interest
}

const postNotification = async (data) => {
  const { UserId, BranchId } = data

  const interest = await interestExists(UserId, BranchId)
  if (!interest) return { code: 400 }

  const newNotification = await Notification.create(data)
  return newNotification ? { code: 201 } : { code: 400 }
}

export { postNotification }
