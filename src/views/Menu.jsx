import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <section>

      <nav>
        <ul>
          <li>
            <Link to='/Init'>Inicio</Link>
          </li>
          <li>
            <Link to='/Quiz'>Mis Quiz</Link>
          </li>
          <li>
            <Link to='/Create'>Crear</Link>
          </li>
          <li>
            <Link to='/Account'>Cuenta</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
        </ul>
      </nav>

      <section>
        <Outlet />
      </section>
    </section>
  )
}

export default Menu
