import { notificationService } from '../../services/index.services.js'

const markAsRead = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await notificationService.markRead(id)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export { markAsRead }
