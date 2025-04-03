import { Op } from 'sequelize'
import { Employee } from '../../database/database.js'

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
  return newEmployee
    ? { code: 201, message: 'Empleado creado' }
    : { code: 400, message: 'Error al crear el empleado' }
}

export { createEmployee }
