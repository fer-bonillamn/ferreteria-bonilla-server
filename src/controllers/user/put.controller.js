import cloudinaryHelper from '../../helpers/cloudinary/cloudinary.helper.js'
import { userService } from '../../services/index.services.js'

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

export { updateUserWithImage, updateUserWithoutImage }
