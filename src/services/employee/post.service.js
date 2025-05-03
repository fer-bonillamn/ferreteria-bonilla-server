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
  const { UserId, BranchId, role } = data
  const employee = await existEmployee(UserId)

  if (employee) return { code: 400, message: 'El empleado ya existe' }

  const branch = await brachExists(BranchId)
  if (!branch) return { code: 400, message: 'La sucursal no existe' }

  const newEmployee = await Employee.create({
    UserId,
    BranchId,
  })

  if (!newEmployee) return { code: 400, message: 'Error al crear el empleado' }

  await User.update(
    {
      role,
    },
    {
      where: {
        id: UserId,
      },
    }
  )

  return { code: 201, message: 'Empleado creado' }
}

export { createEmployee }
