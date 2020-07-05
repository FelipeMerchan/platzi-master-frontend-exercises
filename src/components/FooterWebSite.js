import React, { Component } from 'react'

import './styles/FooterWebSite.css'
import twitterLogo from '../images/twitter.svg'
import facebookLogo from '../images/facebook.svg'
import spotifyLogo from '../images/spotify.svg'
import youtubeLogo from '../images/youtube.svg'

class FooterWebSite extends Component {
  render() {
    return (
      <footer className="FooterWebSite">
          <div className="FooterWebSite__social">
            <a href="/" className="twitter" target="_blank">
              <img width="40" src={twitterLogo} alt="Twitter" />
            </a>
            <a href="/" className="facebook" target="_blank">
              <img width="40" src={facebookLogo} alt="Facebook" />
            </a>
            <a href="/" className="spotify" target="_blank">
              <img width="40" src={spotifyLogo} alt="Spotify" />
            </a>
            <a href="/" className="youtube" target="_blank">
              <img width="40" src={youtubeLogo} alt="YouTube" />
            </a>
          </div>
          <span className="FooterWebSite__copyright">
            &copy;2012. Todos los derechos reservados
          </span>
      </footer>
    )
  }
}

export default FooterWebSite