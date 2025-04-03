import { interestService } from '../../services/index.services.js'

const createInterest = async (req, res) => {
  try {
    const { UserId, BranchId } = req.body
    const { code, message } = await interestService.createInterest(
      UserId,
      BranchId
    )
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { createInterest }
