import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:3030/api/v1/',
  timeout: 1500
})

export default instance
