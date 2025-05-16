import {
  Branch,
  JobApplication,
  JobOffer,
  Resume,
  User,
} from '../../database/database.js'

const getJobApplications = async () => {
  const jobApplications = await JobApplication.findAll({
    include: [
      {
        model: JobOffer,
        include: [Branch],
      },
      {
        model: User,
        include: [Resume],
      },
    ],
  })
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
    include: [{ model: JobOffer, include: [Branch] }],
  })
  return { code: 200, jobApplications }
}

const getById = async (id) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      id: id,
    },
    include: [
      {
        model: JobOffer,
        include: [Branch],
      },
    ],
  })
  return jobApplication
    ? { code: 200, jobApplication }
    : { code: 404, message: 'Aplicación de trabajo no encontrada' }
}

export { getJobApplications, getByJobOfferId, getByUserId, getById }
