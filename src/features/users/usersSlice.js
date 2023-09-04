import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  name: '',
  isLogin: '',
  id: ''
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {

  }
})

export default usersSlice.reducer
