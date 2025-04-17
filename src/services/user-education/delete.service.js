import { UserEducation } from '../../database/database.js'

const deleteUserEducation = async (id) => {
  const userEducation = await UserEducation.findOne({
    where: {
      id,
    },
  })
  if (!userEducation) return { code: 400, message: 'El título no existe' }

  const deletedUserEducation = await UserEducation.destroy({
    where: {
      id,
    },
  })
  return deletedUserEducation
    ? { code: 200, message: 'Título eliminado' }
    : { code: 400, message: 'Error al eliminar el título' }
}

export default deleteUserEducation
