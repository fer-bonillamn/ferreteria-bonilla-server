import { Branch, JobOffer } from '../../database/database.js'

const brachExists = async (id) => {
  const branch = await Branch.findByPk(id)
  return branch
}

const deleteById = async (id) => {
  const jobOffer = await JobOffer.findByPk(id)
  if (jobOffer) {
    await jobOffer.destroy()
    return { code: 200, message: 'Oferta de trabajo eliminada' }
  } else {
    return { code: 404, message: 'Oferta de trabajo no encontrada' }
  }
}

const deleteByBranch = async (BranchId) => {
  const branch = await brachExists(BranchId)
  if (!branch) return { code: 404, message: 'La sucursal no existe' }

  const jobOffers = await JobOffer.destroy({
    where: {
      BranchId,
    },
  })
  return jobOffers
    ? { code: 200, message: 'Ofertas de trabajo eliminadas' }
    : { code: 404, message: 'No se encontraron ofertas de trabajo' }
}

export { deleteById, deleteByBranch }
