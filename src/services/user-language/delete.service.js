import { UserLanguage } from '../../database/database.js'

const deleteUserLanguage = async (id) => {
  const userLanguage = await UserLanguage.findOne({
    where: {
      id,
    },
  })

  if (!userLanguage) return { code: 400, message: 'El idioma no existe' }

  const deletedUserLanguage = await UserLanguage.destroy({
    where: {
      id,
    },
  })
  return deletedUserLanguage
    ? { code: 200, message: 'Idioma eliminado' }
    : { code: 400, message: 'Error al eliminar el idioma' }
}

export default deleteUserLanguage
