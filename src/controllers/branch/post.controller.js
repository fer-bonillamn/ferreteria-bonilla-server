import { branchService } from '../../services/index.services.js'

const createBranch = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await branchService.createBranch(data)
    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { createBranch }
