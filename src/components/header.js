import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Navbar from './navbar'

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
      <Navbar title={data.site.siteMetadata.title}/>
    </Fragment>
  )
}

export default Header
