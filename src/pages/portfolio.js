import React from 'react'
import { Helmet } from "react-helmet"

import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const PortfolioPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>GuyWhoCode | Portfolio</title>
      </Helmet>
      <Jumbotron jumbotronTitle="My Portfolio" jumbotronContent="A portfolio of my work and learning journey." />
      <div className="container container-padding">
        <p>Coming soon.</p>
      </div>
    </Layout>
  )
}

export default PortfolioPage
