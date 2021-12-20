import { NavLink } from 'react-router-dom'
// import s from './Menu.module.css'

const Menu = () => {
  return (
    <div className="nav_container">
      <div className="logoWoT"></div>
      <nav>
        <div className="content-wh content-wh-end">
          <ul className="nav_menu">
            <li className="nav_menu_item">
              <NavLink to="/" className="active_itm">
                All
              </NavLink>
            </li>
            <li className="nav_menu_item">
              <NavLink to="/?type=vehicles">Vehicles</NavLink>
            </li>
            <li className="nav_menu_item">
              <NavLink to="/?type=gold">Gold</NavLink>
            </li>
            <li className="nav_menu_item">
              <NavLink to="/?type=premiun-account">Premium account</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Menu
