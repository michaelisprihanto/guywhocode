import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Navbar from './navbar'
import Helmet from 'react-helmet'

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
      <Navbar />
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
    </Fragment>
  )
}

export default Header
