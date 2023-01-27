import Header from "./Header"
import Footer from "./Footer"
import BookingForm from "./BookingForm"

const BookingPage = ({bookingData, setBookingData, availableTimes, setAvailableTimes}) => {
  return(
    <>
    <Header/>
    <main>    
     <BookingForm
      bookingData={bookingData}
      setBookingData={setBookingData}
      availableTimes={availableTimes}
      setAvailableTimes={setAvailableTimes}
     />
     </main>
    <Footer/>
    </>
  )
}

export default BookingPage