import { Resume } from '../../database/database.js'

const deleteResume = async (UserId) => {
  const resume = await Resume.findOne({
    where: {
      UserId,
    },
  })

  if (!resume) return { code: 404, message: 'Curriculum Vitae no encontrado' }
  const { publicId } = resume
  const resumeDeleted = await Resume.destroy({
    where: {
      UserId,
    },
  })
  return resumeDeleted
    ? { code: 200, message: 'Curriculum Vitae eliminado', publicId }
    : { code: 404, message: 'Curriculum Vitae no encontrado' }
}

export { deleteResume }
