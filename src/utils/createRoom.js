import Axios from './Axios'

export const createRoom = data => {
  return Axios.post('room', {
    ...data
  })
    .then(response => response)
    .catch(err => err)
}
