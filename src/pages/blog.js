import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import { Link, graphql, useStaticQuery } from 'gatsby'

const BlogPage = () => {
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
      <Jumbotron jumbotronTitle="Blog" jumbotronContent="My writings on the journey of web development." />
      <div className="container container-padding">
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
      </div>
    </Layout>
  )
}

export default BlogPage
