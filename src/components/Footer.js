import logo from '../icons/logo.svg'
import { Outlet, Link } from "react-router-dom";

const Footer = () => {
  return(
    <footer>
      <img src={logo} width={200} height={100} alt="logo"/>
      <nav>
        <div>
          <h2>Site Links</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
      <div>
        <h2>Contact</h2>
        <p>Address</p>
      </div>
      <div>
        <h2>Social Media</h2>
        <p>Links</p>
      </div>
    </footer>
  )
}

export default Footer