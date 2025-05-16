import { jobOfferService } from '../../services/index.services.js'

const getAll = async (req, res) => {
  try {
    const { code, jobOffers } = await jobOfferService.getAll()
    res.status(code).json({ jobOffers })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const getByBranchId = async (req, res) => {
  try {
    const { id } = req.params
    const { code, jobOffers, message } = await jobOfferService.getByBranchId(id)
    res.status(code).json(message ? { message } : { jobOffers })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, jobOffer } = await jobOfferService.getById(id)
    res.status(code).json({ jobOffer })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const getByEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const { code, jobOffers, message } = await jobOfferService.getByEmployee(id)
    res.status(code).json(message ? { message } : { jobOffers })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getAll, getByBranchId, getById, getByEmployee }
