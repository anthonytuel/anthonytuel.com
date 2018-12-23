import React from 'react'
import { FaMailBulk } from 'react-icons/fa';
import Layout from '../components/layout'

const contactPage = () => (
  <Layout>
      <div className="main">
  <section id="three">
      <h2>Get In Touch</h2>
      <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
      <div className="row">
          <div className="8u 12u$(small)">
              <form method="post" action="#">
                  <div className="row uniform 50%">
                      <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                      <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                      <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                  </div>
              </form>
                <input type="submit" value="Send Message" />
          </div>
      </div>
  </section>
  </div>
    </Layout>
)

export default contactPage;