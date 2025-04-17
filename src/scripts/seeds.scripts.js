import { positions, userAdmin } from '../data/seed.data.js'
import { Position, User } from '../database/database.js'
import { bcryptUtil } from '../utils/index.utils.js'

const loadData = async () => {
  const positionsDB = await Position.findAll({})

  if (positionsDB.length === 0) {
    const positionsMap = positions.map((pos) => ({
      name: pos,
    }))

    await Position.bulkCreate(positionsMap)
  }

  // Load Admin User
  const hash = await bcryptUtil.hashPassword(userAdmin.password)

  const userAdminDB = await User.findOne({
    where: {
      email: userAdmin.email,
    },
  })

  if (!userAdminDB) {
    await User.create({
      ...userAdmin,
      password: hash,
    })
  }
}

export { loadData }
