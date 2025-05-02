import { branchService } from '../../services/index.services.js'

const updateBranch = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params
    const { code, message } = await branchService.updateBranch(id, data)
    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { updateBranch }
