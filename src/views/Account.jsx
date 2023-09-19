import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Account = () => {
  const isLogin = useSelector(state => state.users.isLogin)

  if (!isLogin) {
    return <Navigate to='/Login' />
  }

  return (
    <h2>Account</h2>
  )
}

export default Account
