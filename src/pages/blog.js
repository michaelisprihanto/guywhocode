import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const BlogPage = () => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle="Blog" jumbotronContent="This is a blog." />
    </Layout>
  )
}

export default BlogPage
