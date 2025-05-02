import { Interest } from '../../database/database.js'

const getByUserId = async (UserId) => {
  const userInterests = await Interest.findAll({
    where: {
      UserId: UserId,
    },
  })
  return { code: 200, userInterests }
}

export { getByUserId }
