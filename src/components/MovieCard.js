import React from "react"
import poster from "../img/poster.png"
const MovieCard = ({
  title = "Movie Name",
  genre = "Thriller",
  btntext = "Book a Tickets",
  btnicon = "fas fa-shopping-cart",
}) => {
  return (
    <div className='col-lg-3 col-6'>
      <div className='card mt-2'>
        <img src={poster} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h4 className='card-title'>
            {title}
          </h4>
          <p>
            Genre : <span>{genre}</span>
          </p>
          <a href='#' className='btn btn-primary btn-block'>
            <i className={btnicon}></i> &nbsp; {btntext}
          </a>
        </div>
      </div>
    </div>
  )
}
export default MovieCard
