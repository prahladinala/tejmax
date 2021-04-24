import React from 'react'
import fposter01 from '../img/fposter1.png'
import fposter02 from '../img/fposter2.png'
import fposter03 from '../img/fposter3.png'
export default function FeaturedPosters() {
  return (
    <div>
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-ride='carousel'
      >
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img src={fposter03} class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={fposter02} class='d-block w-100' alt='...' />
          </div>
          <div class='carousel-item'>
            <img src={fposter01} class='d-block w-100' alt='...' />
          </div>
        </div>
        <a
          class='carousel-control-prev'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='sr-only'>Previous</span>
        </a>
        <a
          class='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='sr-only'>Next</span>
        </a>
      </div>
    </div>
  )
}
