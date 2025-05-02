import { JobOffer, Branch } from '../../database/database.js'

const branchExists = async (BranchId) => {
  const branch = await Branch.findByPk(BranchId)
  return branch
}

const createJobOffer = async (data) => {
  const { BranchId } = data

  const branch = await branchExists(BranchId)
  if (!branch) return { code: 400, message: 'La sucursal no existe' }

  const newJobOffer = await JobOffer.create(data)
  return newJobOffer
    ? { code: 201, message: 'Oferta de trabajo creada', jobOffer: newJobOffer }
    : { code: 400, message: 'Error al crear la oferta de trabajo' }
}

export { createJobOffer }
