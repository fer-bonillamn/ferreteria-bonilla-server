import { Op } from 'sequelize'
import { UserReference } from '../../database/database.js'

const saveUserReference = async (data) => {
  const { phone, email } = data

  const userExists = await UserReference.findOne({
    where: {
      [Op.or]: [{ phone }, { email }],
    },
  })

  if (userExists)
    return { code: 400, message: 'La referencia ya ha sido agregada' }

  const newUserReference = await UserReference.create(data)
  return newUserReference
    ? { code: 201, message: 'Referencia agregada' }
    : { code: 400, message: 'Error al agregar la referencia' }
}

export { saveUserReference }
