import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
<Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <div className="main">
    <h2>I'm <strong>Anthony Tuel,</strong> a student currently living and studying in Ames, IA.</h2> 
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites. Test travis.
    </p>
  </div>
  </Layout>
)


export default IndexPage
