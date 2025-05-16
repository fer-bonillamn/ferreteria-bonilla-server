import {
  deleteJobApplication,
  rejectJobApplication,
  acceptJobApplication,
} from './delete.controller.js'
import { getByUser, getAll, getById } from './get.controller.js'
import { applyJob } from './post.controller.js'
import { updatePostulation } from './put.controller.js'

export default {
  applyJob,
  deleteJobApplication,
  getByUser,
  getAll,
  getById,
  rejectJobApplication,
  acceptJobApplication,
  updatePostulation,
}
