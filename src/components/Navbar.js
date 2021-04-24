import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav
      class='navbar navbar-expand-md navbar-light fixed-top py-4'
      id='main-nav'
      data-aos='fade-down'
    >
      <div class='container'>
        <NavLink to='/' className='navbar-brand'>
          <h3 class='d-inline align-middle'>TejMax</h3>
        </NavLink>
        <button
          class='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarCollapse'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item'>
              <NavLink
                to='/'
                className='nav-link'
                exact
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink
                to='/movies'
                className='nav-link'
                exact
                activeClassName='active'
              >
                Movies
              </NavLink>
            </li>
            <li class='nav-item'>
              <NavLink
                to='/theaters'
                className='nav-link'
                exact
                activeClassName='active'
              >
                Theaters
              </NavLink>
            </li>
            <li class='nav-item'>
              <button
                type='button'
                class='btn btn-primary my-auto'
                data-toggle='modal'
                data-target='#staticBackdrop'
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
