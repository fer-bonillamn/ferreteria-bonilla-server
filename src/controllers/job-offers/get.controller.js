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

export { getAll }
