import { userSkillService } from '../../services/index.services.js'

const createUserSkill = async (req, res) => {
  try {
    const data = req.body
    const { code, message } = await userSkillService.createUserSkill(data)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { createUserSkill }
