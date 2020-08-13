import React from 'react'

import './styles/FyloFooter.css'
import fyloImagotipo from '../images/fylo/logo.svg'
import iconLocation from '../images/fylo/icon-location.svg'
import iconPhone from '../images/fylo/icon-phone.svg'
import iconEmail from '../images/fylo/icon-email.svg'
import facebook from '../images/fylo/facebook.svg'
import twitter from '../images/fylo/twitter.svg'
import instagram from '../images/fylo/instagram.svg'

function FyloFooter() {
  return (
    <footer className="FyloFooter">
      <figure className="FyloFooter__logoContainer">
        <img className="FyloFooter__logo" width="150" src={fyloImagotipo} alt="Localización" />
      </figure>
      <div>
        <div className="FyloFooter__location">
          <img width="12" src={iconLocation} alt="Localización" />
          <p>
            Lorem ipsum dolor sit amet, consectetuer 
            adipiscing elit, sed diam nonummy nibh euismod 
            tincidunt ut laoreet dolore magna aliqua
          </p>
        </div>
        <div className="FyloFooter__contact-information">
          <div>
            <img width="12" src={iconPhone} alt="Teléfono" />
            <span>+1-543-123-4567</span>
          </div>
          <div>
            <img width="12" src={iconEmail} alt="Email" />
            <span>example@fylo.com</span>
          </div>
        </div>
        <ul>
          <li>
            <a href="#aboutUs" id="aboutUs">About Us</a>
          </li>
          <li>
            <a href="#jobs" id="jobs">jobs</a>
          </li>
          <li>
            <a href="#press" id="press">Press</a>
          </li>
          <li>
            <a href="#blog" id="blog">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#contactUs" id="contactUs">Contact Us</a>
          </li>
          <li>
            <a href="#term" id="term">Term</a>
          </li>
          <li>
            <a href="#privacy" id="privacy">Privacy</a>
          </li>
        </ul>
        <div className="FyloFooter__social-media">
          <figure>
            <img width="12" src={facebook} alt="Facebook" />
          </figure>
          <figure>
            <img width="12" src={twitter} alt="Twitter" />
          </figure>
          <figure>
            <img width="12" src={instagram} alt="Instagram" />
          </figure>
        </div>
      </div>
    </footer>
  )
}

export default FyloFooter