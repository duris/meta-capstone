import Header from "./Header"
import Footer from "./Footer"
import { useEffect, useState } from "react"
import { Router, useNavigate } from "react-router-dom"
import {fetchAPI, seededRandom, submitAPI} from '../metaApi'
import { Formik } from 'formik';


const BookingForm = ({bookingData, setBookingData, availableTimes, setAvailableTimes, submitForm}) => {

  const [dateError, setDateError] = useState(null)
  const [timeError, setTimeError] = useState(null)
  const [guestsError, setGuestsError] = useState(null)
  const [occasionError, setOccasionError] = useState(null)
  const [isTouched, setIsTouched] = useState(false);
  const [validated, setValidated] = useState(false)


  useEffect(() => {
    validateForm()
  },[dateError, timeError, guestsError, occasionError, isTouched])

  const handleBlur = () => {
    validateForm()
  }

  function validateForm() {
    if (isTouched){
    if(bookingData.guests < 1){
      setGuestsError('Has to be at least 1 guest')
    } else if (bookingData.guests > 10){
      setGuestsError('Cannot seat more then 10')
    } else {
      setGuestsError(null)
    }

    if(bookingData.date === ''){
      setDateError('Must select a date')
    } else {
      setDateError(null)
    }

    if(bookingData.time === ''){
      setTimeError('Must select a time')
    } else {
      setTimeError(null)
    }

    if(bookingData.occasion === ''){
      setOccasionError('Must select an occasion')
    } else{
      setOccasionError(null)
    }

    if(dateError === '' && timeError === '' && guestsError === '' && occasionError === '' && isTouched){
      setValidated(true)
    } else {
      setValidated(false)
    }
    }
  }

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

  const [items, setItems] = useState([]);
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('bookings'));
    if (items) {
    setItems(items);
    console.log(items)
    }

    // localStorage.clear();
    console.log(items)
    // const bookedTimes = items.map(item => { return({date: item.date, time: item.time})})
    // setBooked(bookedTimes)
  }, []);


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
          <input id="res-date" value={bookingData.date} onBlur={handleBlur} onChange={(e) => {
            setAvailableTimes({type: 'update_times'})
            setBookingData(prevState => {return {...prevState, date:e.target.value}})
            setIsTouched(true)
            validateForm()
            }} type="date"/>
            <span className="error">{dateError}</span>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={bookingData.time}onBlur={handleBlur} onChange={(e) => {
            setBookingData(prevState => {return {...prevState, time:e.target.value}})
            setIsTouched(true)
            }} >
            <option></option>
            <AvailableTimes />
          </select>
          <span className="error">{timeError}</span>
          <label htmlFor="guests">Guests</label>
          <input data-testid="inputSearch" type="number" placeholder="1" min="1" max="10" id="guests" value={bookingData.guests} onBlur={handleBlur} onChange={(e) => {
            setBookingData(prevState => {return {...prevState, guests:e.target.value}})
            setIsTouched(true)
            }} />
            <span className="error">{guestsError}</span>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={bookingData.occasion} onBlur={handleBlur} onChange={(e) => {
            setBookingData(prevState => {return {...prevState, occasion:e.target.value}})
            setIsTouched(true)
            }} >
            <option></option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <span className="error">{occasionError}</span>
          <button id="submitButton" disabled={!validated} type="submit">Make Your Reservation</button>
        </form>
      </div>
    </>
  )
}

export default BookingForm