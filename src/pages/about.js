import React from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

const AboutPage = () => {
  return (
    <Layout>
      <Jumbotron jumbotronTitle="I'm GuyWhoCode" jumbotronContent="About me." />
      <div className="container container-padding">
        <p>My name is Michael a.k.a. GuyWhoCode, my passion is building things. I have tasted different career journeys in non-tech industries, however my heart has always been into technology. I built this website as reminders and logs of my journey back into tech industry, and I want to give back to tech communities who have been very supportive of my journeys.</p>
        <hr />
        <p><strong>Languages:</strong></p>
        <ul>
          <li>Essentials: HTML, CSS</li>
          <li>Can't live without: JavaScript</li>
          <li>Most enjoyable to use: React, Python</li>
        </ul>
        <hr />
        <p><strong>This is what type of person i am:</strong></p>
        <ul>
          <li>Have thirsts for knowledge</li>
          <li>A student of the game of basketball</li>
          <li>Addicted to mangoes</li>
          <li>Forget non-essential things easily</li>
        </ul>
        <hr />
        <p><strong>My bucketlist includes:</strong></p>
        <ul>
          <li>Open a restaurant, free food for people in need</li>
          <li>Speak at conferences</li>
          <li>Travel around the world for 2 months</li>
          <li>Have a company that empowers employees to be useful in communities</li>
          <li>Able to cook restaurant-grade quality food!</li>
        </ul>
        <hr />
        <p><strong>Elsewhere:</strong></p>
        <ul>
          <li>Medium</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
          <li>GitHub</li>
        </ul>
      </div>
    </Layout>
  )
}

export default AboutPage
