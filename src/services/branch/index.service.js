import { createBranch } from './post.service.js'
import { getAllBranches, getBranchById } from './get.service.js'
import { deleteBranch } from './delete.service.js'
import { updateBranch } from './put.service.js'
export default {
  createBranch,
  getAllBranches,
  getBranchById,
  deleteBranch,
  updateBranch,
}
