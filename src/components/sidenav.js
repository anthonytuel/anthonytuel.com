import React from 'react'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import avi from '/Users/amtuel/gatsby/anthonytuel.com/src/images/45245990.jpeg'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby'

class SideNav extends React.Component {
    render() {
      return (
        <div>
        <Paper className="sidenav"
          children= {
            <div className="content-wrapper">
            
            <center>

              <div className="relative-avi-wrapper">
                  <img src={avi} rounded className="avatar" alt="avatar" />
              </div>

            </center>
            
            <div className="relative-nav-wrapper">
              
                <center>
                  <div>
                      <p className="name">Anthony Tuel</p>
                      <p className="bio">I am a hobbyist software developer
                      attending Iowa State University.</p>
                  </div>
                  <div id="socialMedia">
                <div className="inner">
                    <a href="https://www.twitter.com/anthonytuel" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.github.com/anthonytuel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anthonytuel" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>
            
                </center>
                
                
                <Divider/>
                  <div>
                    <Button fullWidth component={Link} to="/">Home</Button>
                    <Button fullWidth component={Link} to="/about">About</Button>
                    <Button fullWidth component={Link} to="/projects">Projects</Button>
                    <Button fullWidth component={Link} to="/contact">Contact</Button>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      );
    }
  }
  export default SideNav;