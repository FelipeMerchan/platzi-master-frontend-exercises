import React from 'react'

import PortfolioMenu from './PortfolioMenu'
import './styles/PortfolioFooter.css'

function PortfolioFooter(props) {
  return (
    <footer className="PortfolioFooter" id="footer">
      <PortfolioMenu onClick={props.onClick} dataset="footer"/>
      <div>
        <span>Copyright 2010 <strong>- Felipe Merchan</strong> - Todos los derechos reservados</span>
      </div>
    </footer>
  )
}

export default PortfolioFooter