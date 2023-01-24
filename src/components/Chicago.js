import restaurant from '../images/restaurant.jpg'
import chef from '../images/restaurant-chef-b.jpg'

const Chicago = () => {
  return(
    <section className="chicago">
      <div className="inner-wrapper">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div>
        <img src={restaurant} alt="resturant image"></img>
          <img src={chef} alt="chefs image"></img>
        </div>
      </div>
    </section>
  )
}

export default Chicago