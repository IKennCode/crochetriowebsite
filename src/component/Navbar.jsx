import React, {useState, useEffect} from 'react'
import nav_logo from '../static/images/nav_logo.png';
import '../static/css/navbar.css';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';

const Navbar = () => {
  const [show_dropdown,setShowDropdown] = useState(false);
  const session_user = JSON.parse(sessionStorage.getItem('session_user'));
  const user_active = session_user ? session_user : false;


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top p-4 b-shadow">
        <div className="container-fluid d-flex flex-row justify-content-between px-4">
          <Link to="/" className="navbar-brand">
            <img height={60} width={80} src={nav_logo} alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-5 d-flex justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <CustomLink className='nav-link' to="/">Home</CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className='nav-link' to='/about'>About</CustomLink>
              </li>
              <li className="nav-item dropdown" onClick={(e)=>{
                  setShowDropdown((prev) => !prev)
                  }}>
                  <a className="nav-link dropdown-toggle" role='button'>
                    Services
                  </a>
                  {
                      show_dropdown ?
                    (
                      <div className='custom-dp d-flex flex-column position-absolute'>
                        <CustomLink className='nav-link' to="/services/commission" >Commision</CustomLink>
                        <CustomLink className='nav-link' to="/services/marketplace" >Market Place</CustomLink>
                      </div>
                    )
                  
                  :false
                  }
                  
              </li>
              <li className="nav-item">
                <CustomLink className='nav-link' >Contact Us</CustomLink>
              </li>
            </ul>
          </div>
            {
              user_active ? 
                  <button className='btn fs-4 rounded-3 px-3 py-1 th-color-1 fw-medium'>{user_active.fullname.split(' ')[0]}</button>
                :
                  <Link className='text-decoration-none' to='/login'>
                    <button className=' btn fs-6 p-3 th-color-1 fw-medium d-flex align-items-center column-gap-2'>
                      Get Started <ArrowRight/>    
                    </button>
                  </Link>
            }
        </div>
      </nav>
    </>
  )
}

export default Navbar


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
      <Link className={isActive ? "active-link" : ""} to={to} {...props}>
        {children}
      </Link>
  )
}