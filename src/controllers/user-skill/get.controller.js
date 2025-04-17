import { userSkillService } from '../../services/index.services.js'

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const { code, userSkills } = await userSkillService.getByUserId(id)
    res.status(code).json({ userSkills })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUserId }
