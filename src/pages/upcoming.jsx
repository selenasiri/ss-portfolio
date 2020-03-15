import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import inherwords from '../assets/images/inherwords.jpeg'

const UpcomingPage = () => {
  return (
    <Layout>
      <h1>Upcoming </h1>
      <h2>Die Zauberflote by Mozart</h2>
      <h2>Le nozze di Figaro</h2>
      <h2>Le nozze di Figaro</h2>
      <h2>A Night of Enchantment</h2>
      <h2>Mason Gross Senior Recital</h2>
      <h2>"In Her Words" Rutgers Voorhees Choir</h2>
      <img className="inherwords" src={inherwords} alt="inherwords" />
      <h2>Mason Gross Junior Recital</h2>
    </Layout>
  )
}

export default UpcomingPage
