import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3030/api/v1/',
  timeout: 1500
})

export default instance
