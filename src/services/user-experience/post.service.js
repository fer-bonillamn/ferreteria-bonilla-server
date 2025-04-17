import { User, UserExperience } from '../../database/database.js'

const saveUserExperience = async (data) => {
  const { UserId, companyName } = data

  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })
  if (!userExists) return { code: 400, message: 'El usuario no existe' }

  const userExperienceExists = await UserExperience.findOne({
    where: {
      UserId: UserId,
      companyName: companyName,
    },
  })

  if (userExperienceExists)
    return { code: 400, message: 'La experiencia laboral ya ha sido agregada' }

  const newUserExperience = await UserExperience.create(data)
  return newUserExperience
    ? { code: 201, message: 'Experiencia laboral agregada' }
    : { code: 400, message: 'Error al agregar la experiencia laboral' }
}

export { saveUserExperience }
