import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import authService from '../../utils/auth'

const initialState = {
  token: '',
  name: '',
  isLogin: '',
  id: ''
}

export const loginAsync = createAsyncThunk(
  'users/login',
  async (data, thunkAPI) => {
    try {
      const response = await authService.login(data)
      return response
    } catch (error) {
      return thunkAPI.rejectWithValue
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.id = action.payload.token
        state.isLogin = true
        state.name = action.payload.name
      })
  }
})

export default usersSlice.reducer
