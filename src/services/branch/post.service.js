import { Branch } from '../../database/database.js'

const existByKey = async (key, value) => {
  const branch = await Branch.findOne({
    where: {
      [key]: value,
    },
  })

  return branch
}

const createBranch = async (data) => {
  const { phone, email, isMain } = data

  const existByPhone = await existByKey('phone', phone)
  const existByEmail = await existByKey('email', email)

  if (isMain) {
    const branchMainExists = await Branch.findOne({
      where: {
        isMain: true,
      },
    })

    if (branchMainExists)
      return {
        code: 400,
        message: 'Error al crear. Ya existe una sucursal principal',
      }
  }

  if (existByPhone)
    return {
      code: 201,
      message: 'Error al crear. Ya existe una sucursal con ese teléfono',
    }

  if (existByEmail)
    return {
      code: 201,
      message: 'Error al crear. Ya existe una sucursal con ese correo',
    }

  const newBranch = await Branch.create(data)
  return newBranch
    ? { code: 201, message: 'Sucursal creada' }
    : { code: 400, message: 'Error al crear la sucursal' }
}

export { createBranch }
