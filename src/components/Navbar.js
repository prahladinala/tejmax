import React from "react"
import { NavLink, withRouter } from "react-router-dom"
import { signout, isAutheticated } from "../auth/index"

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const NavBar = ({ history }) => (
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
            <NavLink
              to='/signin'
              className='btn btn-primary my-auto'
            >
              Login
              </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/signup'
              className='btn btn-outline-primary my-auto'
            >
              Register
              </NavLink>
          </li>
          {isAutheticated() && (
            <li className='nav-item'>
              <span className="nav-link btn btn-warning text-white"
                onClick={() => {
                  signout(() => {
                    history.push("/signin")
                  })
                }}>Signout</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
)

export default withRouter(NavBar);
