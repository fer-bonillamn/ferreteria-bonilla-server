import { deleteUser } from './delete.controller.js'
import { getById, getAllUsers } from './get.controller.js'
import { registerUser, registerUserWithGoogle } from './post.controller.js'
import {
  updateUserWithImage,
  updateUserWithoutImage,
  updateValidation,
  updatePassword,
} from './put.controller.js'

export default {
  deleteUser,
  getById,
  getAllUsers,
  registerUser,
  registerUserWithGoogle,
  updateUserWithImage,
  updateUserWithoutImage,
  updateValidation,
  updatePassword,
}
