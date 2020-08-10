import React from 'react'

import PortfolioMenu from '../components/PortfolioMenu'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioSlider from '../components/PortfolioSlider'
import AboutMe from '../components/AboutMe'
import imageSlider from '../images/image-slider.png'
import imageSlider2 from '../images/image-slider-2.png'

function ThirteenthWeek() {

  const images = [
    imageSlider,
    imageSlider2
  ]

  return (
    <main className="u-wrapper bg-gray-gradient">
      <div className="wrapper">
        <PortfolioMenu />
        <PortfolioHero />
        <PortfolioSlider slides={images} />
        <section className="details">
          <AboutMe />
        </section>
      </div>
    </main>
  )
}

export default ThirteenthWeek