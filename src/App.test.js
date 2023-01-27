import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm'
import {BrowserRouter as Router} from 'react-router-dom';

const bookingData = {
  date: '',
  time: '',
  guests: '',
  occasion: ''
}

const availableTimes = ['16:00', '17:30', '18:50', '19:00', '20:00', '21:00']



test('Renders the BookingForm heading', () => {
    render(
    <Router>
      <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
    </Router>
    );
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Validate initalizeTimes values', () => {
  expect(initalizeTimes.toBeInTheDocument)
})