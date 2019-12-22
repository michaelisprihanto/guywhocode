import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            summary
            date(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <Jumbotron jumbotronTitle="Hello, I'm GuyWhoCode" jumbotronContent="I'm a full-stack developer by passion and a teacher by heart. I believe in the power of giving. My mission is to share knowledge to other people." />
      <div className="container container-padding mt-3">
        <h4>Blog</h4>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <div className="card mb-3 shadow card-gwc">
              <div className="card-body ml-5 mt-3 mb-3">
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2 className="card-title">{edge.node.frontmatter.title}</h2>
                </Link>
                <p className="card-text">{edge.node.frontmatter.summary}</p>
                <p className="card-text">{edge.node.frontmatter.date}</p>
              </div>              
            </div>
          )
        })}      
        <Link to='/blog'><button type="button" className="btn btn-outline-primary mb-3 mt-2">See more blog posts</button></Link>
        <hr />
        <h4>Portfolio</h4>
        <p>Coming soon.</p>
        <Link to='/portfolio'><button type="button" className="btn btn-outline-primary mb-3 mt-2">See more of my portfolio</button></Link>
        <hr />
        <h4>About Me</h4>
        <p><strong>My bucketlist includes:</strong></p>
        <ul>
          <li>Open a restaurant that serves free food for people in need</li>
          <li>Speak at conferences</li>
          <li>Travel around the world for 2 months</li>
          <li>Build a company that empowers employees to be useful in communities</li>
          <li>Able to cook restaurant-grade quality food!</li>
        </ul>
        <Link to='/about'><button type="button" className="btn btn-outline-primary mb-3 mt-2">See more of me</button></Link>
      </div>
    </Layout>
  )
}

export default IndexPage
