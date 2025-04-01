import { User } from '../../database/database.js'

const getAllUsers = async () => {
  const users = await User.findAll()
  return users
}

const getByKey = async (key, value) => {
  const user = await User.findOne({
    where: {
      [key]: value,
    },
  })
  return user
}

export { getAllUsers, getByKey }
