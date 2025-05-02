import { JobOffer, Branch } from '../../database/database.js'

const branchExists = async (id) => {
  const branch = await Branch.findByPk(id)
  return branch
}

const getById = async (id) => {
  const jobOffer = await JobOffer.findOne({
    where: {
      id: id,
    },
    include: [Branch],
  })
  if (jobOffer) {
    return { code: 200, jobOffer }
  } else {
    return { code: 404, message: 'Oferta de trabajo no encontrada' }
  }
}
const getByBranchId = async (id) => {
  const branch = await branchExists(id)
  if (!branch) return { code: 404, message: 'La sucursal no existe' }

  const jobOffers = await JobOffer.findAll({
    where: {
      BranchId: id,
    },
  })

  return { code: 200, jobOffers }
}
const getAll = async () => {
  const jobOffers = await JobOffer.findAll({
    include: [Branch],
  })
  return { code: 200, jobOffers }
}

export { getById, getByBranchId, getAll }
