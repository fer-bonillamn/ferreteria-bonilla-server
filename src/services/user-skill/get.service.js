import { UserSkill } from '../../database/database.js'

const getByUserId = async (UserId) => {
  const userSkills = await UserSkill.findAll({
    where: {
      UserId: UserId,
    },
  })
  return { code: 200, userSkills }
}

export { getByUserId }
