import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm'
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from './components/Homepage';
import Hero from './components/Hero';

const bookingData = {
  date: '',
  time: '',
  guests: '',
  occasion: ''
}

const availableTimes = {times:['16:00', '17:30', '18:50', '19:00', '20:00', '21:00']}

const sum = 10+11

test('Renders the BookingForm heading', () => {
    render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
    </Router>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})


test('Test sum', () => {
  expect(sum).toBe(21)
})

test('Check homepage for Render', () => {
  render(
  <Router>
    <Hero/>
  </Router>
  );
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
})