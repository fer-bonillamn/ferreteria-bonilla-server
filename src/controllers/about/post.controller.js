import { aboutService } from '../../services/index.services.js'

const saveAbout = async (req, res) => {
  try {
    const data = req.body
    const { code, about, message } = await aboutService.saveAbout(data)
    res.status(code).json(about ? { about } : { message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { saveAbout }
