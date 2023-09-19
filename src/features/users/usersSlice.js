import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import authService from '../../utils/auth'

const initialState = {
  token: '',
  name: '',
  isLogin: false,
  id: ''
}

export const loginAsync = createAsyncThunk(
  'users/login',
  async (data, thunkAPI) => {
    try {
      const response = await authService.login(data)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue()
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
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLogin = false
        state.status = 'fails'
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.id = action.payload.user._id
        state.isLogin = true
        state.name = action.payload.user.name
        state.token = action.payload.token
        state.status = 'success'
      })
  }
})

export default usersSlice.reducer
