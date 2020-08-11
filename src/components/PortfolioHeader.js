import React from 'react'

import PortfolioMenu from './PortfolioMenu'

function PortfolioHeader(props) {
  return (
    <header className="text-right" id="header">
      <PortfolioMenu onClick={props.onClick} dataset="nav" />
    </header>
  )
}

export default PortfolioHeader