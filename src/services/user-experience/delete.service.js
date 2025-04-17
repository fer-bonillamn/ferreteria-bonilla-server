import { UserExperience } from '../../database/database.js'

const deleteUserExperience = async (id) => {
  const userExperience = await UserExperience.findOne({
    where: {
      id,
    },
  })

  if (!userExperience)
    return { code: 400, message: 'La experiencia laboral no existe' }

  const deletedUserExperience = await UserExperience.destroy({
    where: {
      id,
    },
  })
  return deletedUserExperience
    ? { code: 200, message: 'Experiencia laboral eliminada' }
    : { code: 400, message: 'Error al eliminar la experiencia laboral' }
}

export default deleteUserExperience
