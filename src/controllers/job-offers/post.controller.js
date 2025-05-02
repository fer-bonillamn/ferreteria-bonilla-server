import { Branch, Interest } from '../../database/database.js'
import {
  jobOfferService,
  notificationService,
} from '../../services/index.services.js'

const createJobOffer = async (req, res) => {
  try {
    const data = req.body
    const { BranchId } = data

    const { code, message, jobOffer } = await jobOfferService.createJobOffer(
      data
    )

    if (code === 201) {
      const userInterests = await Interest.findAll({
        where: {
          BranchId: BranchId,
        },
      })

      const branch = await Branch.findOne({
        where: {
          id: BranchId,
        },
      })

      if (userInterests.length > 0) {
        const usersId = userInterests.map((usr) => usr.UserId)
        const newNotifications = usersId.map((id) => ({
          UserId: id,
          BranchId: BranchId,
          message: `${branch.name} ha publicado un nueva oferta de trabajo`,
          notificationType: 'Offer',
          relationId: jobOffer.dataValues.id,
        }))
        // Publicar noficiaciones
        await notificationService.postNotifications(newNotifications)
      }

      res.status(code).json({ message })
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export { createJobOffer }
