import { About, User } from '../../database/database.js'

const getByUserId = async (UserId) => {
  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })
  if (!userExists) return { code: 400, message: 'El usuario no existe' }

  const about = await About.findOne({
    where: {
      UserId: UserId,
    },
  })
  return about
    ? { code: 200, about }
    : { code: 404, message: 'Acerca de no encontrado' }
}

export { getByUserId }
