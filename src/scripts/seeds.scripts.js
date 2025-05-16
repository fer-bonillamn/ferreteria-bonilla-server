import {
  jobOfferList,
  mainBranch,
  positions,
  userList,
} from '../data/seed.data.js'
import {
  Branch,
  Employee,
  JobOffer,
  Position,
  User,
} from '../database/database.js'
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
  const hash = await bcryptUtil.hashPassword(userList[0].password)

  const userAdminDB = await User.findOne({
    where: {
      email: userList[0].email,
    },
  })

  const newUsers = userList.map((user) => ({
    ...user,
    password: hash,
  }))

  if (!userAdminDB) {
    await User.bulkCreate(newUsers)
  }

  const mainBranchDB = await Branch.findOne({
    where: {
      isMain: true,
    },
  })

  if (!mainBranchDB) {
    await Branch.create(mainBranch)
  }

  const branchMain = await Branch.findOne({
    where: {
      isMain: true,
    },
  })

  const offers = await JobOffer.findAll({})
  if (offers.length === 0) {
    const offersMap = jobOfferList.map((offer) => ({
      ...offer,
      BranchId: branchMain.dataValues.id,
    }))
    await JobOffer.bulkCreate(offersMap)
  }
}

export { loadData }
