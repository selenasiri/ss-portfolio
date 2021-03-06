import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import home from '../assets/images/home.jpg'
import barbarinacostume from '../assets/images/barbarinacostume.jpg'
import momanddadrecital from '../assets/images/momanddadrecital.jpg'
import waltergroup from '../assets/images/waltergroup.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Singer. Actor. Developer.</h1>
      <img className="home" src={home} alt="home" />
      <br />
      <h2>Voice & Piano Teacher at Siri Voice Studio</h2>
      */Link to Siri Voice Studio/*
      <div className="gallery">
        {' '}
        <h1>Gallery</h1>
        <a target="_blank" href="barbarinacostume" />
        <img
          className="barbarinacostume"
          src={barbarinacostume}
          alt="barbarinacostume"
        />
        <a target="_blank" href="momanddadrecital" />
        <img
          className="momanddadrecital"
          src={momanddadrecital}
          alt="momanddadrecital"
        />
        <a target="_blank" href="waltergroup" />
        <img className="waltergroup" src={waltergroup} alt="waltergroup" />
      </div>
      <p>
        Did you like this page? Contact <Link to="/contact"> here</Link> to
        create a website.
      </p>
    </Layout>
  )
}

export default IndexPage
