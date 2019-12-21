import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const AboutPage = () => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle="I'm GuyWhoCode" jumbotronContent="About me." />
      <div className="container container-padding">
        <p>My name is Michael a.k.a. GuyWhoCode, my passion is building things. I have tasted different career journeys in non-tech industries, however my heart has always been into technology. I built this website as a reminder and logs of my journey back into tech industry, and I want to give back to tech communities who have been very supportive of my journeys.</p>
        <p>DRAFT: i'm the type of person to, bucketlist, elsewhere(contacts), learningtype</p>
      </div>
    </Layout>
  )
}

export default AboutPage
