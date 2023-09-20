import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/v1/',
  timeout: 1500
})

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
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
