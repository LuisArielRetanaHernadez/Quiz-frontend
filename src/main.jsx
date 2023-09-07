import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './app/store'

// views
import Menu from './views/Menu.jsx'
import Home from './views/Home.jsx'
import Quizs from './views/Quizs.jsx'
import Account from './views/Account.jsx'
import ErrrorView from './views/ErrorView'
import Login from './views/Login'

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
