import React from 'react'

import './styles/SocialMedia.css'
import facebook from '../images/social-media/facebook.png'
import digg from '../images/social-media/digg.png'
import flickr from '../images/social-media/flickr.png'
import twitter from '../images/social-media/twitter.png'

function SocialMedia() {
  return (
    <article className="SocialMedia">
      <h2 className="SocialMedia__title">también
        <br /> <span>estoy en</span>
      </h2>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img className="SocialMedia__icon" width="30" src={facebook} alt="Facebook" />
        <strong className="SocialMedia__url">www.facebook.com/lorem</strong>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img className="SocialMedia__icon" width="30" src={digg} alt="Facebook" />
        <strong className="SocialMedia__url">www.digg.com/user/lorem</strong>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img className="SocialMedia__icon" width="30" src={flickr} alt="Facebook" />
        <strong className="SocialMedia__url">www.flickr.com/photos/lorem</strong>
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <img className="SocialMedia__icon" width="30" src={twitter} alt="Facebook" />
        <strong className="SocialMedia__url">www.twitter.com/lorem</strong>
      </a>
    </article>
  )
}

export default SocialMedia