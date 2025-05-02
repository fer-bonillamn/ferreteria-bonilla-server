import { aboutService } from '../../services/index.services.js'

const updateAbout = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params
    const { code, message } = await aboutService.updateAbout(id, data)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { updateAbout }
