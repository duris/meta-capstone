import Nav from "./Nav"
import logo from "../icons/logo.svg"

const Header = () => {
  return(
    <header>
      <img src={logo} width={200} height={100}/>
      <Nav/>
    </header>
  )
}

export default Header