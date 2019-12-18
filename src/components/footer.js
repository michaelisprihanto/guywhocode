import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
  `)

  return (
    <Fragment>
      <footer className="page-footer font-small bg-light fixed-bottom">
        <hr />
        <div className="container">

          <div className="row">

            <div className="col-md-6 py-5">
              <div className="mb-5 flex-center">
              <div className="footer-copyright text-center py-3">{data.site.siteMetadata.author} © 2019. All rights reserved.</div>
              </div>
            </div>

            <div className="col-md-6 py-5">
              <div className="mb-5 flex-center">
              <div className="footer-copyright text-center py-3">Icons</div>
              </div>
            </div>

          </div>

        </div>


      </footer>
    </Fragment>
  )
}

export default Footer
