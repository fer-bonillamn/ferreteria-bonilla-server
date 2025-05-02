import { JobApplication } from '../../database/database.js'

const deleteJobApplication = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id: id,
    },
  })

  if (!jobApplication)
    return { code: 400, message: 'Aplicación de trabajo no encontrada' }

  await jobApplication.destroy()
  return { code: 200, message: 'Postulación eliminada' }
}

const rejectJobApplication = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id: id,
    },
  })

  if (!jobApplication)
    return { code: 400, message: 'Aplicación de trabajo no encontrada' }

  const rejectJobApplication = await JobApplication.update(
    { status: 'Rechazada' },
    {
      where: {
        id: id,
      },
    }
  )

  return rejectJobApplication
    ? { code: 200, message: 'Postulación rechazada' }
    : { code: 400, message: 'Error al rechazar la postulación' }
}

const acceptJobApplication = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id: id,
    },
  })

  if (!jobApplication)
    return { code: 400, message: 'Aplicación de trabajo no encontrada' }

  const acceptJobApplication = await JobApplication.update(
    { status: 'Aceptada' },
    {
      where: {
        id: id,
      },
    }
  )

  return acceptJobApplication
    ? { code: 200, message: 'Postulación aceptada' }
    : { code: 400, message: 'Error al aceptar la postulación' }
}

export { deleteJobApplication, rejectJobApplication, acceptJobApplication }
