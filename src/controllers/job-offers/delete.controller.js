import { jobOfferService } from '../../services/index.services.js'

const deleteJobOffer = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await jobOfferService.deleteById(id)
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { deleteJobOffer }
