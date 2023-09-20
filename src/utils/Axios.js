import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/v1/',
  timeout: 1500
})

instance.interceptors.request.use(
  req => {
    const token = JSON.parse(localStorage.getItem('token'))

    req.headers.Authorization = `Bearer ${token}`

    return req
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token')

      window.location.href = '/Login'

      return error
    }
  }
)
export default instance
