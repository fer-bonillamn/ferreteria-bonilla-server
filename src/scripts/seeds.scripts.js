import {
  jobOfferList,
  mainBranch,
  positions,
  userList,
} from '../data/seed.data.js'
import {
  Branch,
  Employee,
  JobApplication,
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

  const userEmployee = await User.findOne({
    where: {
      email: 'reclutador@gmail.com',
    },
  })

  const employeeDB = await Employee.findOne({
    where: {
      UserId: userEmployee.dataValues.id,
    },
  })

  const branchMain = await Branch.findOne({
    where: {
      isMain: true,
    },
  })

  if (!employeeDB) {
    await Employee.create({
      BranchId: branchMain.dataValues.id,
      UserId: userEmployee.dataValues.id,
    })
  }

  const offers = await JobOffer.findAll({})
  if (offers.length === 0) {
    const offersMap = jobOfferList.map((offer) => ({
      ...offer,
      BranchId: branchMain.dataValues.id,
    }))
    await JobOffer.bulkCreate(offersMap)
  }

  const applications = await JobApplication.findAll({})
  if (applications.length === 0) {
    const jobOffer = await JobOffer.findAll({})
    const application = {
      UserId: userEmployee.dataValues.id,
      JobOfferId: jobOffer[0].dataValues.id,
      coverLetter: 'Cover letter',
    }

    await JobApplication.create(application)
  }
}

export { loadData }
