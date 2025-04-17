import { branchService } from '../../services/index.services.js'

const getAllBranches = async (req, res) => {
  try {
    const { code, branches } = await branchService.getAllBranches()
    res.status(code).json({ branches })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getAllBranches }
