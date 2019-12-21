import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle="Hello, I'm GuyWhoCode" jumbotronContent="I'm a teacher by heart and a full-stack developer by passion. My mission is to share knowledge to other people." />
      <div className="container container-padding mt-3">
        <h4>Blog</h4>
        <h4>Portfolio</h4>
        <h4>About Me</h4>
      </div>
    </Layout>
  )
}

export default IndexPage
