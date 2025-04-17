import { User, UserSkill } from '../../database/database.js'

const createUserSkill = async (data) => {
  const { skill, UserId } = data

  const userExists = await User.findOne({
    where: {
      id: UserId,
    },
  })

  if (!userExists) return { code: 400, message: 'El usuario no existe' }

  const existingSkill = await UserSkill.findOne({
    where: {
      skill: skill,
    },
  })
  if (existingSkill)
    return { code: 400, message: 'La habilidad ya ha sido agregada' }

  const newUserSkill = await UserSkill.create(data)
  return newUserSkill
    ? { code: 201, message: 'Habilidad agregada' }
    : { code: 400, message: 'Error al agregar la habilidad' }
}

export { createUserSkill }
