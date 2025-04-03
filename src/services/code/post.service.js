import { Code } from '../../database/database.js'
import { codeUtil } from '../../utils/index.utils.js'

const createCode = async (data) => {
  const { type, UserId } = data
  const code = await codeUtil.createCode()
  const expirationTime = new Date()
  expirationTime.setMinutes(expirationTime.getMinutes() + 3)

  const newCode = await Code.create({
    code,
    type,
    expirationTime,
    UserId,
  })
  return newCode
}

export { createCode }
