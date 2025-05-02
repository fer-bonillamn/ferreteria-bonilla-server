import { messageService } from '../../services/index.services.js'

const markAsRead = async (req, res) => {
  try {
    const { SenderId, ReceiverId } = req.query
    const data = req.body
    const { code, message } = await messageService.markAsRead(
      data,
      SenderId,
      ReceiverId
    )
    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export { markAsRead }
