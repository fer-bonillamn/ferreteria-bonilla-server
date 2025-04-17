import { userReferenceService } from '../../services/index.services.js'

const getByUserId = async (req, res) => {
  try {
    const { id } = req.params
    const { code, userReferences, message } =
      await userReferenceService.getByUserId(id)
    res.status(code).json(userReferences ? { userReferences } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getByUserId }
