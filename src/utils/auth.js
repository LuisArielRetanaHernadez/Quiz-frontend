import Axios from '../utils/Axios'

const login = ({ email, password }) => {
  return Axios.post('users/login', {
    email,
    password
  }).then(response => {
    localStorage.setItem('token', JSON.stringify(response.data.token))
    return response
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
