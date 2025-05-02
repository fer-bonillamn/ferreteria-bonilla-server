import { employeeService } from '../../services/index.services.js'

const createEmployee = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await employeeService.createEmployee(data)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { createEmployee }
