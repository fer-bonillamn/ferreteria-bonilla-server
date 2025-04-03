import { Resume } from '../../database/database.js'

const deleteResume = async (id) => {
  const resume = await Resume.destroy({
    where: {
      id,
    },
  })
  return resume
    ? { code: 200, message: 'Curriculum Vitae eliminado' }
    : { code: 404, message: 'Curriculum Vitae no encontrado' }
}

export { deleteResume }
