import { UserSkill } from '../../database/database.js'

const deleteUserSkill = async (id) => {
  const userSkill = await UserSkill.findByPk(id)
  if (!userSkill) return { code: 404, message: 'Habilidad no encontrada' }

  await userSkill.destroy()
  return { code: 200, message: 'Habilidad eliminada' }
}

export default deleteUserSkill
