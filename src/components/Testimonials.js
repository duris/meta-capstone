import stars from '../icons/stars.svg'

const Testimonials = () => {
  return(
    <section className="testimonials">
      <div className="inner-wrapper">
      <h1>Testimonials</h1>
      <div className="reviews">
        <div>          
          <img src={stars} className="rating"/>
          <img  className="person"/>
          <h2>Person</h2>
          <p>Review area</p>
        </div>
        <div>          
          <img src={stars} className="rating"/>
          <img className="person"/>
          <h2>Person</h2>
          <p>Review area</p>
        </div>
        <div>
      
          <img src={stars} className="rating"/>
          <img className="person"/>
          <h2>Person</h2>
          <p>Review area</p>
        </div>
        <div>
          <img src={stars}className="rating"/>
          <img className="person"/>
          <h2>Person</h2>
          <p>You have to try the Greek Salad!</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Testimonials