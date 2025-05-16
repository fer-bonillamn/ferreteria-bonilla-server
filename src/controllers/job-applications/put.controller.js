import {
  Branch,
  JobOffer,
  Message,
  Notification,
} from '../../database/database.js'
import { jobApplicationService } from '../../services/index.services.js'

const updatePostulation = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { code, message } = await jobApplicationService.updatePostulation(
      data,
      id
    )

    if (code === 200) {
      const { UserId, JobOfferId, observations, status, EmployerId } = data
      const jobOffer = await JobOffer.findOne({
        where: {
          id: JobOfferId,
        },
      })

      const branch = await Branch.findOne({
        where: {
          id: jobOffer.BranchId,
        },
      })
      await Notification.create({
        UserId,
        BranchId: branch.id,
        message: `Tu postulación para la oferta de trabajo ${jobOffer.title} ha sido actualizada.Estado: ${status}. Revisa tu bandeja de entrada para conocer el resultado.`,
        notificationType: 'Postulation',
        relationId: id,
      })

      await Message.create({
        SenderId: EmployerId,
        ReceiverId: UserId,
        text: `Tu postulación para la oferta de trabajo ${jobOffer.title} ha sido actualizada.Estado: ${status}. Observaciones: ${observations}`,
      })
    }

    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export { updatePostulation }
