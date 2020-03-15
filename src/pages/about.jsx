import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/Layout'
import aboutphoto from '../assets/images/aboutphoto.jpg'

const AboutPage = () => {
  return (
    <Layout>
      <h1>About </h1>
      <img className="aboutphoto" src={aboutphoto} alt="aboutphoto" />
      <h2>
        "Every child is an artist. The problem is how to remain an artist once
        we grow up." - Pablo Picasso
      </h2>
      //Side view photo
      <p>
        After completing a B.M. in vocal performance from Mason Gross School of
        the Arts, soprano Selena Siri has developed her interest in music since
        she began studying piano as a child. Her most recent engagements singing
        Mozart include the 1st Lady in Die Zauberflöte (2020), Susanna and
        Barbarina in Le nozze di Figaro with the New York Lyric Opera (2019).
        She sang her debut with the Greek Opera Studio as Barbarina in Le nozze
        di Figaro (2016) and continues to work in finding a deeper understanding
        of singing. Other appearances in The Rutgers Opera chorus include Così
        fan tutte (2016), L'Enfant et les Sortilèges (2016), Fidelio (2017),
        Dialogues des Carmélites (2017) and Die Zauberflöte (2017) where she
        performed Pamina in the Act II finale with the Rutgers Voorhees Choir.
        Prior to this experience she also received 1st place in the Washington
        D.C. regional round of the 水立方 Shui Li Fang pop singing competition
        where she competed in the final round in Beijing, China and 1st place in
        the NJ NATS competition. She was also involved in many musical theatre
        productions including Ti Moune in Once on this Island (2014) and
        Rapunzel in Into the Woods (2013). Offstage she continues to encourage
        students to find freedom in their practice while working on technique.
        By doing so she continues to expand her knowledge of teaching private
        lessons with Young Mozart Music Academy and her home studio.
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
      //Download headshots //Download resume
      <p>
        <a href="http://selenasiri.com" target="_blank">
          Selena
        </a>
      </p>
    </Layout>
  )
}

export default AboutPage
