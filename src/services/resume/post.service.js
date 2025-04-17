import { Resume, User } from '../../database/database.js'

const postResume = async (data) => {
  const { UserId } = data

  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })

  if (!userExists) return { code: 400, message: 'El usuario no existe' }
  const resume = await Resume.create(data)
  return resume
    ? {
        code: 201,
        resume,
        message: 'Curriculum Vitae creado',
      }
    : {
        code: 400,
        message: 'Error al crear el Curriculum Vitae',
      }
}

export { postResume }
