import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { Router, useNavigate } from "react-router-dom"
import {fetchAPI, seededRandom, submitAPI} from '../metaApi'


const BookingForm = ({bookingData, setBookingData, availableTimes, setAvailableTimes, submitForm}) => {

  const navigate = useNavigate();

  const  handleSubmit = async (e) => {
    e.preventDefault();



  if(submitForm() === true)
  {
    console.log('success')
    navigate('/confirmation')
  }else {
    alert('Error')
  }

  }


  const AvailableTimes = () => {

    return(availableTimes.times.map(time => {
      return(<option key={time}>{time}</option>)
      }))
  }



  return(
    <>
    <h1>Book Now</h1>
      <div className="booking-wrapper">
        <form className="booking" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input id="res-date" value={bookingData.date} onChange={(e) => {
            setAvailableTimes({type: 'update_times'})
            setBookingData(prevState => {return {...prevState, date:e.target.value}})
            }} type="date"/>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={bookingData.time} onChange={(e) => {
            setBookingData(prevState => {return {...prevState, time:e.target.value}})
            }} >
            <AvailableTimes />
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={bookingData.guests} onChange={(e) => {
            setBookingData(prevState => {return {...prevState, guests:e.target.value}})
            }} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={bookingData.occasion} onChange={(e) => {
            setBookingData(prevState => {return {...prevState, occasion:e.target.value}})
            }} >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <input id="submitButton" type="submit" value="Make Your reservation"/>
        </form>
      </div>
    </>
  )
}

export default BookingForm