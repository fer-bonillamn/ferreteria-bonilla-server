import { About } from '../../database/database.js'

const updateAbout = async (UserId, data) => {
  const about = await About.findOne({
    where: {
      UserId: UserId,
    },
  })

  if (!about) return { code: 400, message: 'Acerca de no encontrado' }

  const aboutUpdated = await About.update(data, {
    where: {
      UserId: UserId,
    },
  })

  return aboutUpdated
    ? { code: 200, message: 'Acerca de actualizado' }
    : { code: 400, message: 'Error al actualizar Acerca de' }
}

export { updateAbout }
