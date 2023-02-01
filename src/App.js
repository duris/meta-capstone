import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Menu from './components/Menu';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OrderPage from './components/OrderPage';
import LoginPage from './components/LoginPage';
import AboutPage from './components/AboutPage';
import { useEffect, useReducer, useState } from 'react';
import {fetchAPI, seededRandom, submitAPI} from './metaApi'
import ConfirmedBooking from './components/ConfirmedBooking';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  })

  // const initializeTimes  = () => {
  //   return()
  // }

  const today = new Date()

  const init = {times: fetchAPI(today)}


  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, init)

  const submitForm = () => {
    const res = submitAPI(bookingData)
    if (res === true) {
      return(true)
    }else{
      return(false)
    }
  }


  function updateTimes(state, action) {
    if (action.type === 'init') {
      return {times: ['18:00', '19:30', '19:50', '20:00', '21:00', '22:00']}
    }
    if (action.type === 'update_times') {
      let selectedBookingDate = new Date(bookingData.date)
      console.log('fetching data for', selectedBookingDate)
      let newTimes = fetchAPI(selectedBookingDate)
      console.log(newTimes)
      return {times: newTimes}
    }
    throw Error('Unknown action.');
  }

  // function reducer(state, action) {
  //   let newState;
  //   switch (action.type) {
  //     case 'update':
  //       newState = { counter: state.counter + 1 };
  //       break;
  //     case 'descrease':
  //       newState = { counter: state.counter - 1 };
  //       break;
  //     default:
  //       throw new Error();
  //   }
  //   return newState;
  // }


  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index element={<Homepage bookingData={bookingData} />} />
            <Route path="reservations" element={<BookingPage
              bookingData={bookingData}
              setBookingData={setBookingData}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm} />} />
            <Route path="menu" element={<Menu />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="confirmation" element={<ConfirmedBooking bookingData={bookingData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
