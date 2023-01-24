import Nav from "./Nav"
import logo from "../icons/logo.svg"

const Header = () => {
  return(
    <header>
      <div className="inner-wrapper">
      <img src={logo} width={200} height={100} alt="logo"/>
      <Nav/>
      </div>
    </header>
  )
}

export default Header