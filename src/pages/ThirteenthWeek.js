import React from 'react'

import PortfolioHeader from '../components/PortfolioHeader'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioSlider from '../components/PortfolioSlider'
import AboutMe from '../components/AboutMe'
import MyServices from '../components/MyServices'
import RecentTweets from '../components/RecentTweets'
import CustomerFeedback from '../components/CustomerFeedback'
import SocialMedia from '../components/SocialMedia'
import PortfolioFooter from '../components/PortfolioFooter'

import './styles/ThirteenthWeek.css'
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
        <PortfolioHeader />
        <PortfolioHero />
        <PortfolioSlider slides={images} />
        <section className="AboutMeContainer">
          <AboutMe />
          <MyServices />
        </section>
        <section className="Activity">
          <RecentTweets />
          <CustomerFeedback />
          <SocialMedia />
        </section>
        <PortfolioFooter />
      </div>
    </main>
  )
}

export default ThirteenthWeek