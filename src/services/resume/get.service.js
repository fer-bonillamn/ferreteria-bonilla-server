import { Resume } from '../../database/database.js'

const getAll = async () => {
  const resumes = await Resume.findAll()
  return { code: 200, resumes }
}
const getById = async (id) => {
  const resume = await Resume.findOne({
    where: {
      id,
    },
  })
  return resume
    ? { code: 200, resume }
    : { code: 404, message: 'Curriculum Vitae no encontrado' }
}
const getByUser = async (UserId) => {
  const resume = await Resume.findOne({
    where: {
      UserId,
    },
  })
  return resume
    ? { code: 200, resume }
    : { code: 404, message: 'Curriculum Vitae no encontrado' }
}

export { getAll, getById, getByUser }
