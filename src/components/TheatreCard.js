import React from "react"
import poster from "../img/poster.png"
const TheatreCard = ({
  title = "BasketBall",
  rating = "4",
  btntext = "Book a Tickets",
  btnicon = "fas fa-shopping-cart",
}) => {
  return (
    <div className='col-lg-3 col-6'>
      <div className='card mt-2'>
        <img src={poster} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>
            {title} &nbsp;
            
          </h5>
          <a href='#' className='btn btn-primary btn-block'>
            <i className={btnicon}></i> &nbsp; {btntext}
          </a>
        </div>
      </div>
    </div>
  )
}
export default TheatreCard
