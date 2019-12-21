import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const PortfolioPage = () => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle="My Portfolio" jumbotronContent="A portfolio of my work and learning journey." />
      <div className="container container-padding">
        <p>Coming soon.</p>
      </div>
    </Layout>
  )
}

export default PortfolioPage
