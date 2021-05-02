import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav
      className='navbar navbar-expand-md navbar-light fixed-top py-4'
      id='main-nav'
      data-aos='fade-down'
    >
      <div className='container'>
        <NavLink to='/' className='navbar-brand'>
          <h3 className='d-inline align-middle'>TejMax</h3>
        </NavLink>
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <NavLink
                to='/'
                className='nav-link'
                exact
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/movies'
                className='nav-link'
                exact
                activeClassName='active'
              >
                Movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/theaters'
                className='nav-link'
                exact
                activeClassName='active'
              >
                Theaters
              </NavLink>
            </li>
            <li className='nav-item'>
              <button
                type='button'
                className='btn btn-primary my-auto'
                data-toggle='modal'
                data-target='#staticBackdrop'
              >
                Login
              </button>
            </li>
            <li className='nav-item'>
              <NavLink
                to='/signup'
                className='btn btn-outline-primary my-auto'

              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
