import food from '../images/food1.jpg'
import { Outlet, Link } from "react-router-dom";
const Hero = () => {
  return(
    <section className="hero">
      <div className="inner-wrapper">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link className='reserve' to="/reservations">Reserve a Table</Link>

        </div>
        <div>
          <img src={food} alt="food plate"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero