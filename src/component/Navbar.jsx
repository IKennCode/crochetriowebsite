import React from 'react'
import nav_logo from '../static/images/nav_logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top p-4 b-shadow">
        <div className="container-fluid d-flex flex-row justify-content-between px-4">
          <a className="navbar-brand">
            <img height={60} width={80} src={nav_logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5 d-flex justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link th-color-1 fw-medium">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link th-color-1 fw-medium">About</a>
              </li>
              <li className="nav-item dropdown fw-medium">
                <a className="nav-link dropdown-toggle th-color-1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link th-color-1 fw-medium">Contact Us</a>
              </li>
            </ul>
          </div>
          <button className='btn fs-6 p-3 th-color-1 fw-medium'>Get Started</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar