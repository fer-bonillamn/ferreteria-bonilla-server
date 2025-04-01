const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validEmail = (email) => emailRegex.test(email)

export default {
  validEmail,
}
