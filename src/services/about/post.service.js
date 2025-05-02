import { About, User } from '../../database/database.js'

const saveAbout = async (data) => {
  const { UserId } = data

  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })
  if (!userExists) return { code: 400, message: 'El usuario no existe' }

  const aboutExists = await About.findOne({
    where: {
      UserId: UserId,
    },
  })
  if (aboutExists) return { code: 400, message: 'Acerca de ya ha sido creado' }

  const about = await About.create(data)
  return about
    ? { code: 201, message: 'Acerca de creado' }
    : { code: 400, message: 'Error al crear Acerca de' }
}

export { saveAbout }
