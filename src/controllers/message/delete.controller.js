import { messageService } from '../../services/index.services.js'

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await messageService.deleteMessage(id)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const deleteConversation = async (req, res) => {
  try {
    const { SenderId, ReceiverId } = req.params
    const { code, message } = await messageService.deleteConversation(
      SenderId,
      ReceiverId
    )
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { deleteMessage, deleteConversation }
