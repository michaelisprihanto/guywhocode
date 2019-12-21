import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { SocialIcon } from 'react-social-icons';

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
      <div className="footer mt-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center"><small>{data.site.siteMetadata.author} © 2019. All rights reserved.</small></div>
            </div>
            <div className="col text-center">
              <span className="mr-1">
                <SocialIcon network="medium" style={{ height: 25, width: 25 }} />    
              </span>
              <span className="mr-1">
                <SocialIcon network="twitter" url="https://twitter.com/guywhocode1" style={{ height: 25, width: 25 }} />              
              </span>
              <span className="mr-1">
                <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />              
              </span>
              <span className="mr-1">
                <SocialIcon network="youtube" style={{ height: 25, width: 25 }} />              
              </span>
              <span className="mr-1">
                <SocialIcon network="github" style={{ height: 25, width: 25 }} />    
              </span>
            </div>
          </div>
            
        </div>


      </div>
    </Fragment>
  )
}

export default Footer
