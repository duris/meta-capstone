import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const BookingForm = ({bookingData, setBookingData}) => {


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/')
  }


  return(
    <div className="booking-wrapper">
      {!bookingData.date?<div>no date</div>:<div>{bookingData.date}</div>}
      <form className="booking" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input id="res-date" value={bookingData.date} onChange={(e) => {
          setBookingData(prevState => {return {...prevState, date:e.target.value}})
          }} type="date"/>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" value={bookingData.time} onChange={(e) => {
          setBookingData(prevState => {return {...prevState, time:e.target.value}})
          }} >
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" min="1" max="10" id="guests" value={bookingData.guests} onChange={(e) => {
          setBookingData(prevState => {return {...prevState, guests:e.target.value}})
          }} />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={bookingData.occasion} onChange={(e) => {
          setBookingData(prevState => {return {...prevState, occasion:e.target.value}})
          }} >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
      </form>
    </div>
  )
}

export default BookingForm