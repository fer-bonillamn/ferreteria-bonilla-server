import { User } from '../../database/database.js'

const deleteUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado.' }
  await User.destroy({
    where: {
      id,
    },
  })
  return { code: 200, message: 'Usuario eliminado correctamente.' }
}

export { deleteUser }
