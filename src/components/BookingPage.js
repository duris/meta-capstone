import Header from "./Header"
import Footer from "./Footer"
import BookingForm from "./BookingForm"

const BookingPage = ({bookingData, setBookingData}) => {
  return(
    <>
    <Header/>
    <main>
     <BookingForm bookingData={bookingData} setBookingData={setBookingData} />
     </main>
    <Footer/>
    </>
  )
}

export default BookingPage