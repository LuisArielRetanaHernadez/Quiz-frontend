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
export default instance
