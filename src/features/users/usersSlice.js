import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import authService from '../../utils/auth'

const initialState = {
  isLogin: false,
  id: null
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
    logout: (state) => {
      state.id = null
      state.isLogin = false
    }
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
        state.status = 'success'
      })
  }
})

export const {
  logout
} = usersSlice.actions

export default usersSlice.reducer
