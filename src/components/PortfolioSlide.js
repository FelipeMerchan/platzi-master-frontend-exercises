import React from 'react'

import './styles/PortfolioSlide.css'

function PortfolioSlide ({ content }) {
  return (
    <figure className="PortfolioSlideContainer">
      <img className="PortfolioSlide" width="1000" src={content} alt="" />
    </figure>
  )
}

export default PortfolioSlide