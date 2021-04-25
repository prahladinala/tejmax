import React from 'react'

export default function Cart() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-9 cartborder'>
          <h2>Seating Section</h2>
          <div>
            <ul class='movie-showcase'>
              <li>
                <div class='seat'></div>
                <small>N/A</small>
              </li>
              <li>
                <div class='seat selected'></div>
                <small>Selected</small>
              </li>
              <li>
                <div class='seat occupied'></div>
                <small>Occupied</small>
              </li>
            </ul>

            <div class='movie-container'>
              <div class='movie-screen'></div>
              <div class='movie-row'>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
              </div>
              <div class='movie-row'>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat occupied'></div>
                <div class='seat occupied'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
              </div>
              <div class='movie-row'>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat occupied'></div>
                <div class='seat occupied'></div>
              </div>
              <div class='movie-row'>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
              </div>
              <div class='movie-row'>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat occupied'></div>
                <div class='seat occupied'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
              </div>
              <div class='movie-row'>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat'></div>
                <div class='seat occupied'></div>
                <div class='seat occupied'></div>
                <div class='seat occupied'></div>
                <div class='seat'></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-3 cartborder'>
          <h2>Cart Section</h2>

          <div class='card'>
            <div class='card-body'>
              <div class='form-group'>
                <label for='exampleFormControlSelect1'>
                  Select No of Film Tickets
                </label>
                <select class='form-control' id='exampleFormControlSelect1'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <p>Available Tickets : 40</p>

              <h3>Total: $30</h3>
              <a href='#' class='btn btn-primary btn-block'>
                Pay Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
