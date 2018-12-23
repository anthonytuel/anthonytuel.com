import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import SideNav from './sidenav';

class Template extends React.Component {
  render() {
      const { children } = this.props

      return (
          <div>
              <Header />
              <SideNav />
              {children}
          </div>
      )
  }
}

export default Template
