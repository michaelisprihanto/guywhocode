import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle="Hello, I'm GuyWhoCode" jumbotronContent="I'm a full-stack developer." />
      <div className="container mt-3">
        <h1>Hello.</h1>
      </div>
    </Layout>
  )
}

export default IndexPage
