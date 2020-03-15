import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import home from '../assets/images/home.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Singer. Actor. Developer.</h1>
      <img className="home" src={home} alt="home" />
      <br />
      <h2>Voice & Piano Teacher at Siri Voice Studio</h2>
      */Link to Siri Voice Studio/*
      <p>
        Need a web developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
