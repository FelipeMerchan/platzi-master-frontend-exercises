import React, { useState, useRef, useEffect } from 'react'

import { SliderContent } from './PortfolioSliderContent'
import './styles/PortfolioSlider.css'
import PortfolioSlide from './PortfolioSlide'
import imageSlider from '../images/image-slider.png'
import imageSlider2 from '../images/image-slider-2.png'

function PortfolioSlider() {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })
  const slider = useRef(null)
  const sliderContent = useRef(null)
  const images = [
    imageSlider,
    imageSlider2
  ]

  useEffect(function() {
    let sliderWidth = slider.current.offsetWidth * images.length
    sliderContent.current.style.setProperty('width', `${sliderWidth}px`)
  })

  const { activeIndex, translate, transition } = state

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * 1000,
        activeIndex: images.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * 1000
    })
  }

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * 1000
    })
  }

  return (
    <div className="PortfolioSlider" ref={slider}>
      <SliderContent
        translate={translate}
        transition={transition}
        width='1000px'
        ref={sliderContent}
      >
        {images.map(slide =>
          <PortfolioSlide key={slide} content={slide} />
        )}
      </SliderContent>
      <button className="PortfolioSlider__button left" onClick={prevSlide}></button>
      <button className="PortfolioSlider__button right" onClick={nextSlide}></button>
    </div>
  )
}

export default PortfolioSlider