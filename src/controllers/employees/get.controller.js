import { employeeService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, employees } = await employeeService.getEmployees()
    res.status(code).json({ employees })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getAll }
