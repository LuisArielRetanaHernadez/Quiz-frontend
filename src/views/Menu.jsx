import { Link, Outlet } from 'react-router-dom'

import '../styles/views/Menu.css'
import { useSelector } from 'react-redux'

const Menu = () => {
  const isLogin = useSelector(state => state.users.isLogin)
  return (
    <section className='container-menu'>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link to='/Init'>Inicio</Link>
          </li>
          <li className='nav__item'>
            <Link to='/Quiz'>Mis Quiz</Link>
          </li>
          <li className='nav__item'>
            <Link to='Quiz/Create'>Crear</Link>
          </li>
          {
            isLogin
              ? <li className='nav__item'>
                <Link to='/Account'>Cuenta</Link>
              </li>
              : <li className='nav__item'>
                <Link to='/Login'>Login</Link>
              </li>
          }
        </ul>
      </nav>

      <section className='layout-menu'>
        <Outlet />
      </section>
    </section>
  )
}

export default Menu
