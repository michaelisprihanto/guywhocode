import React, { Fragment } from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container">
          <Link to="/" className="navbar-brand">GuyWhoCode</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link-gwc" activeClassName="nav-link-gwc-active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link-gwc" activeClassName="nav-link-gwc-active">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link-gwc" activeClassName="nav-link-gwc-active">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link-gwc" activeClassName="nav-link-gwc-active">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Header
