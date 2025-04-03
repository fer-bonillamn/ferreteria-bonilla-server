import { Resume } from '../../database/database.js'

const postResume = async (data) => {
  const resume = await Resume.create(data)
  return {
    code: 201,
    resume,
  }
}

export { postResume }
