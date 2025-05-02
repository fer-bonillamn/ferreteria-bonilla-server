import { Op } from 'sequelize'
import { Employee, User } from '../../database/database.js'

const existEmployee = async (UserId) => {
  const employee = await Employee.findOne({
    where: {
      UserId,
    },
  })
  return employee
}

const brachExists = async (BranchId) => {
  const branch = await Employee.findOne({
    where: {
      BranchId,
    },
  })
  return branch
}

const createEmployee = async (data) => {
  const { UserId, BranchId } = data
  const employee = await existEmployee(UserId)

  if (employee) return { code: 400, message: 'El empleado ya existe' }

  const branch = await brachExists(BranchId)
  if (!branch) return { code: 400, message: 'La sucursal no existe' }

  const newEmployee = await Employee.create(data)

  if (newEmployee) {
    await User.update(
      {
        role: 'Empleado',
      },
      {
        where: {
          id: UserId,
        },
      }
    )

    return { code: 201, message: 'Empleado creado' }
  }
  return { code: 400, message: 'Error al crear el empleado' }
}

export { createEmployee }
