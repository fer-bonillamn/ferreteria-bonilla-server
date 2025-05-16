import { Notification } from '../../database/database.js'
import cloudinaryHelper from '../../helpers/cloudinary/cloudinary.helper.js'
import { userService } from '../../services/index.services.js'
import { bcryptUtil } from '../../utils/index.utils.js'

const updateUserWithImage = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params
    const file = req.file

    const secure_url = await cloudinaryHelper.uploadFile(
      'users',
      file.buffer,
      `profilePicture-${file.originalname}`
    )

    const newUserData = {
      ...data,
      profilePicture: secure_url,
    }

    const { code, message, user } = await userService.updateUser(
      id,
      newUserData
    )
    res.status(code).json(user ? { message, user } : { message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}
const updateUserWithoutImage = async (req, res) => {
  try {
    const data = req.body
    const { id } = req.params
    const { code, message, user } = await userService.updateUser(id, data)
    res.status(code).json(user ? { message, user } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const updateValidation = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const { code, message } = await userService.updateUser(id, data)
    if (code === 200 && data.isDataValidated) {
      const newNotification = {
        UserId: id,
        message: 'Tú cuenta ha sido validada. Inicia sesión para continuar.',
        notificationType: 'Account',
      }

      await Notification.create(newNotification)
      return res.status(code).json({ message: 'La cuenta ha sido validada' })
    }

    if (code === 200 && !data.isDataValidated) {
      return res.status(code).json({ message: 'La cuenta no ha sido validada' })
    }

    res.status(code).json({ message })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params
    const data = req.body

    const { password } = data
    console.log(password)
    const hashPassword = await bcryptUtil.hashPassword(password)

    const { code, message } = await userService.updatePassword(id, {
      password: hashPassword,
    })
    res.status(code).json({ message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export {
  updateUserWithImage,
  updateUserWithoutImage,
  updateValidation,
  updatePassword,
}
