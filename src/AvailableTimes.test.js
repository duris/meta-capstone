import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm'
import {BrowserRouter as Router} from 'react-router-dom';
import Homepage from './components/Homepage';
import Hero from './components/Hero';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const bookingData = {
  date: '',
  time: '',
  guests: '',
  occasion: ''
}

const availableTimes = {times:['16:00', '17:30', '18:50', '19:00', '20:00', '21:00']}

const updatedTimes =  ['16:00', '17:30', '18:50', '19:00', '20:00', '21:00']

test('Test Available Times', () => {
  expect(availableTimes.times[0]).toBe('16:00')
})



test('Test Available Times', () => {
  render(
    <Router>
    <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
  </Router>
  );

  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();

})




// test('Test input element', () => {
//   render(
//     <Router>
//     <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
//   </Router>
//   );

//   const input = document.getElementById('guests')

//   // const input = screen.getByLabelText('Guests', {selector: 'input'})

//   // const element = screen.getByTestId('inputSearch')

//   // const getPeople = screen.getByText('Guests')

//   // const input = screen.getByTestId("guests");

//   // expect(getPeople).toBeInTheDocument()
//   fireEvent.change(input, {target: { value: 2}})
//   expect(input.value).toBe(2)

// })




test('Test form inputs', () => {
  render(
  <Router>
    <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
  </Router>
  );



  const submit = screen.getByTestId('submit')
  expect(submit).toBeInTheDocument()

  const occasion = screen.getByTestId('occasion')
  expect(occasion).toBeInTheDocument()

  const guests = screen.getByTestId('guests')
  expect(guests).toBeInTheDocument()

  const time = screen.getByTestId('time')
  expect(time).toBeInTheDocument()
})

function setBookingData() {
  
}


test('Test inputs change', () => {

  const handleChange = jest.fn()

  render(
  <Router>
    <BookingForm availableTimes={availableTimes} bookingData={bookingData} setBookingData={setBookingData} handleChange={handleChange} />
  </Router>
  );


  const occasion = screen.getByTestId('occasion')
  expect(occasion).toBeInTheDocument()



  // expect(occasion[2]).toBe('Anniversary')


  const guests = screen.getByTestId('guests')
  expect(guests).toBeInTheDocument()

  const time = screen.getByTestId('time')
  expect(time).toBeInTheDocument()

  expect(screen.getByRole('option', { name: 'Birthday' })).toBeInTheDocument();
  expect(screen.getByRole('option', { name: 'Anniversary' })).toBeInTheDocument();

  const input = occasion.firstChild

  fireEvent.change(input, {
    target: {
      value:
        1
    }
  });

  fireEvent.change(occasion.firstChild, {
    target: {
      value:
      'Anniversary'
    }
  });

  expect(occasion[1].value).toBe('Birthday');
  expect(occasion[2].value).toBe('Anniversary');

  expect(occasion[0].selected).toBe(true);

  expect(handleChange).toHaveBeenCalledTimes(1)
})



test('Test if submit is disabled', () => {
  render(
  <Router>
    <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
  </Router>
  );



  const submit = screen.getByTestId('submit')
  expect(submit).toBeInTheDocument()
  expect(submit.textContent).toBe('Make Your Reservation')

  expect(submit).toBeDisabled()

})

// test('Check can submit', () => {
//   render(
//     <Router>
//     <BookingForm availableTimes={availableTimes} bookingData={bookingData}/>
//   </Router>
//   )


//   const button = document.getElementById('submitButton')

//   // const onSubmit = jest.fn();
//   const inputValue = "12";

//   // fireEvent.change(getByLabelText(/message/i), { target: { value: inputValue } });
//   // fireEvent.click(getByText(/Make Your Reservation/i));

//   fireEvent.click(button)

//   expect(button).toBeCalled();
// })