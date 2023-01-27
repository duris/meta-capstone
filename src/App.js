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
import { useState } from 'react';

function App() {

  const [bookingData, setBookingData] = useState({
    date: undefined,
    time: undefined,
    guests: undefined,
    occasion: undefined
  })

  return (
    <>
   <BrowserRouter>
      <Routes>
          {/* <Route path="/" element={<Homepage />}/> */}
          <Route index element={<Homepage bookingData={bookingData} />} />
          <Route path="reservations" element={<BookingPage bookingData={bookingData} setBookingData={setBookingData} />} />
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
