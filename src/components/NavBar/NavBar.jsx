// import { NavLink } from 'react-router-dom'
// // import styles from './NavBar.module.css'
// // import Logo from '../../assets/branding/logo.svg'

// const NavBar = ({ user, handleLogout }) => {

//   const publicLinks = (
//     <ul>
//       <li><NavLink to="/login">LOG IN</NavLink></li>
//       <li><NavLink to="/signup">SIGN UP</NavLink></li>
//     </ul>
//   )

//   const protectedLinks = (
//     <ul>
//       <li><NavLink to="/blogs">BLOGS</NavLink></li>
//       <li><NavLink to="/logout" onClick={handleLogout}>LOG OUT</NavLink></li>
//     </ul>
//   )

//   return (
//     <nav >
//       <NavLink to={'/'}><img  alt="" /></NavLink>
//       {user ? protectedLinks : publicLinks}
//     </nav>
//   )
// }

// export default NavBar

// // npm modules
import { NavLink } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/profiles">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
          <li><NavLink to="/auth/change-password">Change Password</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
        
      }
    </nav>
  )
}

export default NavBar
