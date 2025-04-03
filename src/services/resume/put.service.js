import { Resume } from '../../database/database.js'

const updateResume = async (id, data) => {
  const resume = await Resume.findByPk(id)
  if (resume) {
    await resume.update(data)
    return { code: 200, message: 'Curriculum Vitae actualizado' }
  } else {
    return { code: 404, message: 'Curriculum Vitae no encontrado' }
  }
}

export { updateResume }
