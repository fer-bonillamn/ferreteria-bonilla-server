import { JobApplication, User, JobOffer } from '../../database/database.js'

const userExits = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  })
  return user
}

const jobOfferExits = async (id) => {
  const jobOffer = await JobOffer.findOne({
    where: {
      id,
    },
  })
  return jobOffer
}

const jobApplicationExits = async (UserId, JobOfferId) => {
  const jobApplication = await JobApplication.findOne({
    where: {
      UserId,
      JobOfferId,
    },
  })
  return jobApplication
}

const createJobApplication = async (data) => {
  const { UserId, JobOfferId } = data

  const user = await userExits(UserId)
  const jobOffer = await jobOfferExits(JobOfferId)

  if (!user) return { code: 400, message: 'El usuario no existe' }
  if (!jobOffer) return { code: 400, message: 'La oferta de trabajo no existe' }

  const jobApplication = await jobApplicationExits(UserId, JobOfferId)
  if (jobApplication)
    return {
      code: 400,
      message: 'El usuario ya ha aplicado a esta oferta de trabajo',
    }

  const newJobApplication = await JobApplication.create(data)
  return newJobApplication
    ? { code: 201, message: 'Postulación creada' }
    : { code: 400, message: 'Error al crear la aplicación de trabajo' }
}

export { createJobApplication }
