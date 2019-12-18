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
            date
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
      <div className="container">
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
              <Link to={`/blog/${edge.node.fields.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>            
              </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default BlogPage
