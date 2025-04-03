import { JobApplication } from '../../database/database.js'

const getJobApplications = async () => {
  const jobApplications = await JobApplication.findAll()
  return { code: 200, jobApplications }
}

const getByJobOfferId = async (id) => {
  const jobApplications = await JobApplication.findAll({
    where: {
      JobOfferId: id,
    },
  })
  return { code: 200, jobApplications }
}

const getByUserId = async (id) => {
  const jobApplications = await JobApplication.findAll({
    where: {
      UserId: id,
    },
  })
  return { code: 200, jobApplications }
}

const getById = async (id) => {
  const jobApplication = await JobApplication.findByPk(id)
  return jobApplication
    ? { code: 200, jobApplication }
    : { code: 404, message: 'Aplicación de trabajo no encontrada' }
}

export { getJobApplications, getByJobOfferId, getByUserId, getById }
