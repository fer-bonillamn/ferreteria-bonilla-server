import { User, UserEducation } from '../../database/database.js'

const postUserEducation = async (data) => {
  const { UserId, institution } = data

  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })

  if (!userExists) return { code: 400, message: 'El usuario no existe' }

  const userEducationExists = await UserEducation.findOne({
    where: {
      UserId: UserId,
      institution: institution,
    },
  })

  if (userEducationExists)
    return { code: 400, message: 'El título ya ha sido agregado' }

  const newUserEducation = await UserEducation.create(data)
  return newUserEducation
    ? { code: 201, message: 'Título agregado' }
    : { code: 400, message: 'Error al agregar el título' }
}

export { postUserEducation }
