import Header from "./Header"
import Footer from "./Footer"
import menu from "../images/menu.png"

const Menu = () => {
  return(
    <>
    <Header/>
    <main>
      <img src={menu} className="menuImg" />
    </main>
    <Footer/>
    </>
  )
}

export default Menu