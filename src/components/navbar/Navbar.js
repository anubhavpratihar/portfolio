import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  useEffect(() => {
    // Initialize the sidenav component
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
  }, []);

  return (
    <>
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              My Resume
            </Link>
            <Link to="/" data-target="side-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/" className="nav-link">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="nav-link">
                  <i className="fas fa-copy"></i> Skills
                </Link>
              </li>
              <li>
                <Link to="/educations" className="nav-link">
                  <i className="fas fa-graduation-cap"></i> Educations
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="nav-link">
                  <i className="fas fa-id-badge"></i> Experiences
                </Link>
              </li>
              
              <li>
                <Link to="/portfolios" className="nav-link">
                  <i className="fas fa-address-card"></i> Portfolios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="side-nav">
        <li>
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </li>

    <li>
          <Link to="/experiences" className="nav-link">
            <i className="fas fa-id-badge"></i> Experiences
          </Link>
        </li>
    
        <li>
          <Link to="/skills" className="nav-link">
            <i className="fas fa-copy"></i> Skills
          </Link>
        </li>
        <li>
          <Link to="/educations" className="nav-link">
            <i className="fas fa-graduation-cap"></i> Educations
          </Link>
        </li>
        
        
        <li>
          <Link to="/portfolios" className="nav-link">
            <i className="fas fa-address-card"></i> Portfolios
          </Link>
        </li>
      </ul>
      <style>
        {`
          .nav-link:focus,
          .nav-link:active {
            background-color: transparent !important;
          }
          main {
            transition: none !important;
            backface-visibility: hidden;
            perspective: none;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
