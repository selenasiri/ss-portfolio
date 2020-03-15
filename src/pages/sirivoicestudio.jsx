import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import sirivoicestudio from '../assets/images/sirivoicestudio.jpg'

const StudioPage = () => {
  return (
    <Layout>
      <img
        className="sirivoicestudio"
        src={sirivoicestudio}
        alt="sirivoicestudio"
      />
      <p>Teaching philosophy</p>
      <p>Mission Statement</p>

      <p>
        Selena Siri has been a member of NYSTA as an assistant teacher for the
        past two years. She also works at Young Mozart Music Academy teaching
        piano and voice to students who are kids, teenagers and adults.
      </p>
    </Layout>
  )
}

export default StudioPage
