import React, { useState } from 'react'

import PortfolioHeader from '../components/PortfolioHeader'
import PortfolioHero from '../components/PortfolioHero'
import PortfolioSlider from '../components/PortfolioSlider'
import AboutMe from '../components/AboutMe'
import MyServices from '../components/MyServices'
import RecentTweets from '../components/RecentTweets'
import CustomerFeedback from '../components/CustomerFeedback'
import SocialMedia from '../components/SocialMedia'
import PortfolioFooter from '../components/PortfolioFooter'
import {getRandomColor} from '../utils/getRandomColor'

import './styles/ThirteenthWeek.css'
import imageSlider from '../images/image-slider.png'
import imageSlider2 from '../images/image-slider-2.png'

function ThirteenthWeek() {
  const [count, setCount] = useState(0)

  const handleClick = event => {
    const randomColor = getRandomColor()
    const { target } = event

    setCount(count + 1)
    console.log(`Id:${target.id}, Count: ${count}`)

    if (target.dataset.button === 'footer') {
      const header = document.querySelector('#header')
      const navHeader = header.children[0]
      navHeader.style.setProperty('--darkColor', randomColor)
    } else if (target.dataset.button === 'nav') {
      const footer = document.querySelector('#footer')
      const navFooter = footer.children[0]
      navFooter.style.setProperty('--darkColor', randomColor)
    }
  }

  const images = [
    imageSlider,
    imageSlider2
  ]

  return (
    <main className="u-wrapper bg-gray-gradient">
      <div className="wrapper">
        <PortfolioHeader onClick={handleClick} />
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
        <PortfolioFooter onClick={handleClick} />
      </div>
    </main>
  )
}

export default ThirteenthWeek