import React, { Fragment } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="col-sm-8">
            <Link to="/" className="navbar-brand">{data.site.siteMetadata.title}</Link>
          </div>
          <div className="col-sm-3">
            <div className="collapse navbar-collapse" id="navbarToggler">
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
          <div className="col-sm-1">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Header
