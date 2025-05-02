import {
  deleteJobApplication,
  rejectJobApplication,
  acceptJobApplication,
} from './delete.controller.js'
import { getByUser, getAll } from './get.controller.js'
import { applyJob } from './post.controller.js'

export default {
  applyJob,
  deleteJobApplication,
  getByUser,
  getAll,
  rejectJobApplication,
  acceptJobApplication,
}
