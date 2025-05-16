import { createJobApplication } from './post.service.js'
import {
  getById,
  getByJobOfferId,
  getByUserId,
  getJobApplications,
} from './get.service.js'
import {
  deleteJobApplication,
  rejectJobApplication,
  acceptJobApplication,
} from './delete.service.js'
import { updatePostulation } from './put.service.js'
export default {
  createJobApplication,
  deleteJobApplication,
  getById,
  getByJobOfferId,
  getByUserId,
  getJobApplications,
  rejectJobApplication,
  acceptJobApplication,
  updatePostulation,
}
