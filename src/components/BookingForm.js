import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"

const BookingForm = () => {

  const [date, setDate] = useState('01/24/2023')
  const [time, setTime] = useState('17:00')
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  useEffect(() => {
    console.log(date)
    console.log(time)
    console.log(numberOfGuests)
    console.log(occasion)
  }, [date, time, numberOfGuests, occasion])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return(
    <div className="booking-wrapper">
      <form className="booking" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input id="res-date" onChange={(e) => setDate(e.target.value)} type="date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" onChange={(e) => setTime(e.target.value)} >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e) => setNumberOfGuests(e.target.value)} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" onChange={(e) => setOccasion(e.target.value)} >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
      </form>
    </div>
  )
}

export default BookingForm