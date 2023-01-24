import bruchetta from '../images/bruchetta.svg'
import salad from '../images/greek-salad.jpg'
import dessert from '../images/lemon-dessert.jpg'

const Specials = () => {
  return(
    <section className="specials">
      <div className="inner-wrapper">
      <h1>Specials</h1>
      <button>Online Menu</button>
      <div className="feature">
          <div>
            <img src={salad} alt="greek salad" />
            <div className='details'>
              <h2>Greek Salad</h2>
              <span>$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          </div>
          <div>
            <img src={bruchetta} alt="bruchetta" />
            <div className='details'>
              <h2>Bruchetta</h2>
              <span>$5.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          </div>
          <div>
            <img src={dessert} alt="lemon dessert" />
            <div className='details'>
              <h2>Lemon Dessert</h2>
              <span>$5.00</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Specials