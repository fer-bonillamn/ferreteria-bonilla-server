import {
  About,
  User,
  UserEducation,
  UserExperience,
  UserLanguage,
  UserReference,
  UserSkill,
} from '../../database/database.js'

const getAllUsers = async () => {
  const users = await User.findAll()
  return users
    ? { code: 200, users }
    : { code: 404, message: 'No hay usuarios' }
}

const getByKey = async (key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
    },
    include: [
      About,
      UserSkill,
      UserEducation,
      UserExperience,
      UserLanguage,
      UserReference,
    ],
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado.' }

  return user
    ? { code: 200, user: user.dataValues }
    : { code: 404, message: 'Usuario no encontrado.' }
}

export { getAllUsers, getByKey }
