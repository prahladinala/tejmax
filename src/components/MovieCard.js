import React from 'react'
import poster from '../img/poster.png'
const MovieCard = ({
  title = 'BasketBall',
  rating = '4',
  btntext = 'Book a Tickets',
  btnicon = 'fas fa-shopping-cart',
}) => {
  return (
    <div className='col-lg-3 col-6'>
      <div class='card'>
        <img src={poster} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h5 class='card-title'>
            {title} &nbsp;
            <span className='gold_color'>
              <i class='fas fa-star'></i> {rating}
            </span>
          </h5>
          <a href='#' class='btn btn-primary btn-block'>
            <i class={btnicon}></i> &nbsp; {btntext}
          </a>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
