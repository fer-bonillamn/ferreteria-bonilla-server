import { JobApplication } from '../../database/database.js'

const updatePostulation = async (data, id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id: id,
    },
  })

  if (!jobApplication)
    return { code: 404, message: 'Aplicación de trabajo no encontrada' }

  const updatePostulation = await JobApplication.update(data, {
    where: {
      id: id,
    },
  })

  return updatePostulation
    ? { code: 200, message: 'Postulación actualizada' }
    : { code: 400, message: 'Error al actualizar la postulación' }
}

export { updatePostulation }
