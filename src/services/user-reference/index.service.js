import deleteUserReference from './delete.service.js'
import { getByUserId } from './get.service.js'
import { saveUserReference } from './post.service.js'
export default {
  getByUserId,
  saveUserReference,
  deleteUserReference,
}
