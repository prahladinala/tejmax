import React from "react"

export default function Cart() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-9 cartborder'>
          <h2>Seating Section</h2>
          <div>
            <ul className='movie-showcase'>
              <li>
                <div className='seat'></div>
                <small>N/A</small>
              </li>
              <li>
                <div className='seat selected'></div>
                <small>Selected</small>
              </li>
              <li>
                <div className='seat occupied'></div>
                <small>Occupied</small>
              </li>
            </ul>

            <div className='movie-container'>
              <div className='movie-screen'></div>
              <div className='movie-row'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='movie-row'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat occupied'></div>
                <div className='seat occupied'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='movie-row'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat occupied'></div>
                <div className='seat occupied'></div>
              </div>
              <div className='movie-row'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='movie-row'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat occupied'></div>
                <div className='seat occupied'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
              </div>
              <div className='movie-row'>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat'></div>
                <div className='seat occupied'></div>
                <div className='seat occupied'></div>
                <div className='seat occupied'></div>
                <div className='seat'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 cartborder'>
          <h2>Cart Section</h2>

          <div className='card'>
            <div className='card-body'>
              <div className='form-group'>
                <label for='exampleFormControlSelect1'>
                  Select No of Film Tickets
                </label>
                <select className='form-control' id='exampleFormControlSelect1'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <p>Available Tickets : 40</p>

              <h3>Total: $30</h3>
              <a href='#' className='btn btn-primary btn-block'>
                Pay Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
