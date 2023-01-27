import Header from "./Header"
import Hero from "./Hero"
import Specials from "./Specials"
import Chicago from "./Chicago"
import Testimonials from "./Testimonials"
import Footer from "./Footer"
import Main from "./Main"

const Homepage = ({bookingData}) => {

  console.log(bookingData)
  return(
    <>
    <Header/>
    <Hero/>
    <Specials/>
    <Testimonials/>
    <Chicago/>
    <Footer/>
    </>
  )
}

export default Homepage

