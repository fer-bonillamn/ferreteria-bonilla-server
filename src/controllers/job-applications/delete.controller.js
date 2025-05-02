import { Branch, JobApplication, JobOffer } from '../../database/database.js'
import {
  jobApplicationService,
  notificationService,
} from '../../services/index.services.js'

const deleteJobApplication = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await jobApplicationService.deleteJobApplication(
      id
    )
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

const rejectJobApplication = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await jobApplicationService.rejectJobApplication(
      id
    )
    if (code === 200) {
      const jobApplication = await JobApplication.findOne({
        where: {
          id: id,
        },
        include: {
          model: JobOffer,
          include: [Branch],
        },
      })
      const { UserId, JobOffer: JobOfferModel } =
        await jobApplication.dataValues

      const newNotification = {
        UserId,
        BranchId: JobOfferModel.BranchId,
        message: `La oferta de trabajo ${JobOfferModel.title} ha sido rechazada.`,
        notificationType: 'Offer',
        relationId: JobOfferModel.id,
      }

      await notificationService.postNotification(newNotification)
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

const acceptJobApplication = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message } = await jobApplicationService.acceptJobApplication(
      id
    )
    if (code === 200) {
      const jobApplication = await JobApplication.findOne({
        where: {
          id: id,
        },
        include: {
          model: JobOffer,
          include: [Branch],
        },
      })
      const { UserId, JobOffer: JobOfferModel } =
        await jobApplication.dataValues

      const newNotification = {
        UserId,
        BranchId: JobOfferModel.BranchId,
        message: `La oferta de trabajo ${JobOfferModel.title} ha sido aceptada. En breve serás contactado`,
        notificationType: 'Offer',
        relationId: JobOfferModel.id,
      }

      await notificationService.postNotification(newNotification)
    }
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente mas tarde',
    })
  }
}

export { deleteJobApplication, rejectJobApplication, acceptJobApplication }
