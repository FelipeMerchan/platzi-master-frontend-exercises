import React, { Fragment } from 'react'

import PortfolioMenu from './PortfolioMenu'
import './styles/PortfolioFooter.css'

function PortfolioFooter() {
  return (
    <footer className="PortfolioFooter">
      <PortfolioMenu />
      <div>
        <span>Copyright 2010 <strong>- Felipe Merchan</strong> - Todos los derechos reservados</span>
      </div>
    </footer>
  )
}

export default PortfolioFooter