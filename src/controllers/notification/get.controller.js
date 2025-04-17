import { notificationService } from '../../services/index.services.js'

const getAllByUser = async (req, res) => {
  try {
    const { id } = req.params
    const { code, notifications } =
      await notificationService.getNotificationByUser(id)
    res.status(code).json({ notifications })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getAllByUser }
