import Axios from '../utils/Axios'

const login = ({ email, password }) => {
  return Axios.post('users/login', {
    email,
    password
  })
}

const register = (...values) => {
  return Axios.post('users/register',
    ...values
  )
}

const authService = {
  login,
  register
}

export default authService
