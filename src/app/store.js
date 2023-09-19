import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

// redux-persist
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import usersSlice from '../features/users/usersSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users']
}

const rootReducer = combineReducers({
  users: usersSlice
})

const persistRedux = persistReducer(persistConfig, rootReducer)

export default configureStore({
  reducer: persistRedux,
  middleware: [thunk]
})
