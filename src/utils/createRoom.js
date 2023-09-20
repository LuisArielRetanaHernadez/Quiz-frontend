import Axios from './Axios'

// const token = localStorage.getItem('token')

// Axios.defaults.headers.common = {
//   Authorization: `Bearer ${token}`
// }

export const createRoom = data => {
  return Axios.post('room', {
    ...data
  })
    .then(response => response.data)
    .catch(err => err)
}
