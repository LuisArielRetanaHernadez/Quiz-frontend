import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from './app/store'

// views
import Menu from './views/Menu.jsx'
import Home from './views/Home.jsx'
import Quizs from './views/Quizs.jsx'
import Account from './views/Account.jsx'
import ErrrorView from './views/ErrorView'
import Login from './views/Login'
import NewRoom from './views/NewRoom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    errorElement: <ErrrorView />,
    children: [
      {
        path: 'Init',
        element: <Home />
      },
      {
        path: 'Quiz',
        element: <Quizs />
      },
      {
        path: 'Quiz/Create',
        element: <NewRoom />
      },
      {
        path: 'Account',
        element: <Account />
      },
      {
        path: 'Login',
        element: <Login />
      }
    ]
  }
])

const persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </PersistGate>
  </React.StrictMode>
)
