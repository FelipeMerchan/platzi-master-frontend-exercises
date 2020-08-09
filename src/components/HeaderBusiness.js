import React from 'react'

import MenuBusiness from './MenuBusiness'
import './styles/HeaderBusiness.css'
import businessLogo from '../images/brand.JPG'

function HeaderBusiness(props) {
  return (
    <header className="HeaderBusiness">
        <figure className="HeaderBusiness__brandContainer">
          <img className="HeaderBusiness__brand" width="300" src={businessLogo} alt="Empresa.com" />
        </figure>
        <MenuBusiness onClick={props.onClick} />
    </header>
  )
}

export default HeaderBusiness