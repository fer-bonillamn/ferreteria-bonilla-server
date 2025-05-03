import { User } from '../../database/database.js'

const updateUser = async (id, data) => {
  const user = await User.findOne({
    where: {
      id,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado.' }
  const [rows] = await User.update(data, {
    where: {
      id,
    },
  })

  if (rows > 0) {
    const userUpdated = await User.findByPk(id)
    const { password, ...infoUser } = userUpdated
    return {
      code: 200,
      message: 'Usuario actualizado correctamente.',
      user: infoUser.dataValues,
    }
  }

  return { code: 404, message: 'Error al actualizar el usuario' }
}

const updatePassword = async (id, data) => {
  console.log(data)
  const user = await User.findOne({
    where: {
      id,
    },
  })
  if (!user) return { code: 404, message: 'Usuario no encontrado.' }
  const [rows] = await User.update(data, {
    where: {
      id,
    },
  })
  return rows > 0
    ? { code: 200, message: 'Contraseña actualizada correctamente.' }
    : { code: 404, message: 'Error al actualizar la contraseña' }
}

export { updateUser, updatePassword }
