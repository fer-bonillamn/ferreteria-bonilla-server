import { userService } from '../../services/index.services.js'

const getAllUsers = async (req, res) => {
  try {
    const { code, message, users } = await userService.getAllUsers()
    res.status(code).json(users ? { users } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tardeeeeeeeeee',
    })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const { code, message, user } = await userService.getByKey('id', id)
    const { password, ...infoUser } = user
    res.status(code).json(user ? { user: infoUser } : { message })
  } catch (error) {
    res.status(500).json({
      message: 'Error interno en el servidor. Intente más tarde',
    })
  }
}

export { getById, getAllUsers }
