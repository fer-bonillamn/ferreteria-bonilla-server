import { createEmployee } from './post.service.js'
import { getByBranch, getEmployeeById, getEmployees } from './get.service.js'
import { deleteEmployee } from './delete.service.js'
export default {
  createEmployee,
  deleteEmployee,
  getByBranch,
  getEmployeeById,
  getEmployees,
}
