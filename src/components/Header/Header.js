import { Link } from 'react-router-dom'
import HeaderItem from '../../modules/Header/HeaderItem/HeaderItem'
// import s from './Header.module.css'

const Header = ({ wishlist, card }) => {
  return (
    <div className="header">
      <div className="header_content">
        <Link to="/">
          <h1>PREMIUM SHOP</h1>
        </Link>

        <ul className="header_menu">
          <HeaderItem
            href="/wishlist"
            // className="wishlist"
            nameLink="Wishlist"
            value={wishlist}
          />
          <HeaderItem
            href="/shopping-card"
            // className="shoppingCard"
            nameLink="Shopping card"
            value={card}
          />
          <HeaderItem
            href="/"
            // className="login"
            nameLink="Login"
            isLogin={true}
          />
        </ul>
      </div>
    </div>
  )
}

export default Header
