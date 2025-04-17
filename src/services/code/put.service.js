import { Code, User } from '../../database/database.js'

const updateCode = async (email, type, code) => {
  const user = await User.findOne({
    where: {
      email,
    },
  })
  const codeFound = await Code.findOne({
    where: {
      UserId: user.id,
      type,
    },
  })
  const expirationTime = new Date()
  expirationTime.setMinutes(expirationTime.getMinutes() + 3)

  codeFound.expirationTime = expirationTime
  codeFound.code = code
  await codeFound.save()
  return codeFound.dataValues
}

export { updateCode }
