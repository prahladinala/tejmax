import React from "react"
import poster from "../img/poster.png"
const TheatreCard = ({
    details
}) => {
  return (
    <div className='col-lg-3 col-6'>
      <div className='card mt-2'>
        <img src={poster} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>
            {details.name} &nbsp;
          </h5>
          <a href='#' className='btn btn-primary btn-block'>
            <i className="fas fa-shopping-cart"></i> &nbsp; Check Movies
          </a>
        </div>
      </div>
    </div>
  )
}
export default TheatreCard
