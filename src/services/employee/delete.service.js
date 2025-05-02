import { Employee, User } from '../../database/database.js'

const deleteEmployee = async (id) => {
  const employee = await Employee.findOne({
    where: {
      id,
    },
  })
  if (employee) {
    const { UserId } = employee.dataValues
    await employee.destroy()

    await User.update(
      {
        role: 'Candidato',
      },
      {
        where: {
          id: UserId,
        },
      }
    )

    return { code: 200, message: 'Empleado despedido' }
  } else {
    return { code: 404, message: 'Empleado no encontrado' }
  }
}

export { deleteEmployee }
