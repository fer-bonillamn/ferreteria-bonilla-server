import { messageService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, conversations } = await messageService.getAll()
    res.status(code).json({ conversations })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const getAllBySender = async (req, res) => {
  try {
    const { SenderId } = req.params
    const { code, conversations } = await messageService.getAllBySender(
      SenderId
    )
    res.status(code).json({ conversations })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const getConversation = async (req, res) => {
  try {
    const { SenderId, ReceiverId } = req.query
    const { code, conversations } = await messageService.getConversation(
      SenderId,
      ReceiverId
    )
    res.status(code).json({ conversations })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getAll, getAllBySender, getConversation }
