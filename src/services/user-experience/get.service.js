import { User, UserExperience } from '../../database/database.js'

const getByUserId = async (UserId) => {
  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })

  if (!userExists) return { code: 400, message: 'El usuario no existe' }

  const userExperiences = await UserExperience.findAll({
    where: {
      UserId: UserId,
    },
  })
  return { code: 200, userExperiences }
}

export { getByUserId }
