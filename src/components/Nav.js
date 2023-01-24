import hamburger from '../icons/mobile.svg'
import ReactDOM from 'react-dom'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'


const Nav = () => {

  const About = () => {
    return(<div>Hello</div>)
  }
  return(
    <>

        <nav class='mobile'>
          <div className='burger'>
            <img src={hamburger} width={80} height={20} />
          </div>
          <ul>
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li> */}
          </ul>
        </nav>
        <nav class='not-mobile'>
          <ul>
            <li><a href="#">Home</a></li>
            <li>
            {/* <Link to="/about">About</Link> */}
            </li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>

    </>
  )
}

export default Nav