import { registerUser, registerUserWithGoogle } from './post.service.js'
import { getAllUsers, getByKey } from './get.service.js'
import { updatePassword, updateUser } from './put.service.js'
import { deleteUser } from './delete.user.js'
export default {
  getAllUsers,
  getByKey,
  deleteUser,
  registerUser,
  registerUserWithGoogle,
  updateUser,
  updatePassword,
}
