import { Branch, Employee, User } from '../../database/database.js'

const getEmployees = async () => {
  const employees = await Employee.findAll({
    include: [Branch, User],
  })
  return { code: 200, employees }
}

const getEmployeeById = async (id) => {
  const employee = await Employee.findByPk(id)
  return employee
    ? { code: 200, employee }
    : { code: 404, message: 'Empleado no encontrado' }
}

const getByBranch = async (id) => {
  const employees = await Employee.findAll({
    where: {
      BranchId: id,
    },
  })
  return { code: 200, employees }
}

export { getEmployees, getEmployeeById, getByBranch }
