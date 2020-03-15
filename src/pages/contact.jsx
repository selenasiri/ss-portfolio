import React from 'react'
import Layout from '../components/layout/Layout'

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>

      <h2>Send a message for music lessons and collaborations: </h2>
      <form>
        <h2>Name:</h2>
        <h2>Email:</h2>
        <h2>Zip Code:</h2>
        <h2>Message:</h2>
        <input type="textbox" />
      </form>
    </Layout>
  )
}

export default ContactPage
