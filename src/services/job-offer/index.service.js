import { createJobOffer } from './post.service.js'
import { getAll, getByBranchId, getById, getByEmployee } from './get.service.js'
import { deleteByBranch, deleteById } from './delete.service.js'
export default {
  createJobOffer,
  deleteByBranch,
  deleteById,
  getAll,
  getByBranchId,
  getById,
  getByEmployee,
}
