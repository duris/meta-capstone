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

function App() {



  const initializeTimes = ['18:00', '19:30', '19:50', '20:00', '21:00', '22:00']


  const updateTimes = {
    type:'update',
    times: ['16:00', '17:30', '18:50', '19:00', '20:00', '21:00']
  }

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, initializeTimes)

  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  })



  return (
    <>
   <BrowserRouter>
      <Routes>
          <Route index element={<Homepage bookingData={bookingData} />} />
          <Route path="reservations" element={<BookingPage
            bookingData={bookingData}
            setBookingData={setBookingData}
            availableTimes={availableTimes}
            setAvailableTimes={setAvailableTimes} />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
