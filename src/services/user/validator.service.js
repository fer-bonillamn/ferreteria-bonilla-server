import { User } from '../../database/database.js'

export const existByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })
  return user
}

export const existByDNI = async (dni) => {
  const user = await User.findOne({
    where: {
      dni,
    },
  })
  return user
}

export const existByPhone = async (phone) => {
  const user = await User.findOne({
    where: {
      phone,
    },
  })
  return user
}

export const existBySub = async (sub) => {
  const user = await User.findOne({
    where: {
      sub,
    },
  })
  return user
}
