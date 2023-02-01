import Header from "./Header"
import Footer from "./Footer"
import BookingForm from "./BookingForm"

const ConfirmedBooking = ({bookingData, setBookingData, availableTimes, setAvailableTimes}) => {
  return(
    <>
    <Header/>
    <main>
    <h1>Booking Confirmed!</h1>
    <h2>Date: {bookingData.date}</h2>
    <h2>Time: {bookingData.time}</h2>
    <h2>Number of Guests: {bookingData.guests}</h2>
    <h2>Occasion: {bookingData.occasion}</h2>
    </main>
    <Footer/>
    </>
  )
}

export default ConfirmedBooking