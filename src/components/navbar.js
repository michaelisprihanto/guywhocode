import React, { Component } from 'react'
import { Link } from 'gatsby'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-gwc navbar-light bg-light">
          <div className="container">
            <div className="col-sm-6">
              <Link to="/" className="navbar-brand">{this.props.title}</Link>
            </div>
            <div className="col-sm-6">
              <ul className="navbar-gwc mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link-gwc" activeClassName="nav-link-gwc-active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link-gwc" activeClassName="nav-link-gwc-active">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link-gwc" activeClassName="nav-link-gwc-active">Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link-gwc" activeClassName="nav-link-gwc-active">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar