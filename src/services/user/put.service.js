import { User } from '../../database/database.js'

const updateUser = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado.' }
  await User.update(data, {
    where: {
      id,
    },
  })
  return { code: 200, message: 'Usuario actualizado correctamente.' }
}

export { updateUser }
