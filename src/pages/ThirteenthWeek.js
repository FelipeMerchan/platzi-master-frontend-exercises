import React from 'react'

import PortfolioMenu from '../components/PortfolioMenu'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioSlider from '../components/PortfolioSlider'

function ThirteenthWeek() {
  return (
    <main className="u-wrapper bg-gray-gradient">
      <div className="wrapper">
        <PortfolioMenu />
        <PortfolioHero />
        <PortfolioSlider />
      </div>
    </main>
  )
}

export default ThirteenthWeek