import deleteUserReference from './delete.controller.js'
import { getByUserId } from './get.controller.js'
import { saveUserReference } from './post.controller.js'

export default {
  getByUserId,
  deleteUserReference,
  saveUserReference,
}
