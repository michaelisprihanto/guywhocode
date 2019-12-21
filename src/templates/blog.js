import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import { graphql } from 'gatsby'

export const query = graphql`
query (
  $slug: String!
){
  markdownRemark (
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
    }
    html
  }
}
`

const Blog = (props) => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle={props.data.markdownRemark.frontmatter.title} jumbotronContent={props.data.markdownRemark.frontmatter.date} />
      <div className="container container-padding">
        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
      </div>
    </Layout>
  )
}

export default Blog