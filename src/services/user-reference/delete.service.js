import { UserReference } from '../../database/database.js'

const deleteUserReference = async (id) => {
  const deletedUserReference = await UserReference.destroy({
    where: { id },
  })
  return deletedUserReference
    ? { code: 200, message: 'Referencia eliminada' }
    : { code: 400, message: 'Error al eliminar la referencia' }
}

export default deleteUserReference
