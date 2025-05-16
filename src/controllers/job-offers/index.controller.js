import { deleteJobOffer } from './delete.controller.js'
import {
  getAll,
  getByBranchId,
  getById,
  getByEmployee,
} from './get.controller.js'
import { createJobOffer } from './post.controller.js'

export default {
  createJobOffer,
  getAll,
  getByBranchId,
  getById,
  deleteJobOffer,
  getByEmployee,
}
