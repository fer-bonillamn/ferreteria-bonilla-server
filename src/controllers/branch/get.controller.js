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

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, branch } = await branchService.getBranchById(id)
    res.status(code).json({ branch })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}




export { getAllBranches, getById }
