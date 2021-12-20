import { Link } from 'react-router-dom'
// import s from './HeaderItem.module.css'

const HeaderItem = (props) => {
  const { isLogin, className, nameLink, href, value } = props
  return (
    <li className="header_menu_item">
      <Link to={href} className={className}>
        <span>{nameLink}</span>
        {!isLogin && <span> ({value})</span>}
      </Link>
      {isLogin && (
        <>
          <span className="or">or</span>
          <Link to="/">
            <span>Create account</span>
          </Link>
          )
        </>
      )}
    </li>
  )
}

export default HeaderItem
