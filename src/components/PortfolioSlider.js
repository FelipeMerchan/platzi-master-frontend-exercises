import React, { useState, useRef, useEffect } from 'react'

import { SliderContent } from './PortfolioSliderContent'
import './styles/PortfolioSlider.css'
import PortfolioSlide from './PortfolioSlide'

function PortfolioSlider(props) {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  })
  const slider = useRef(null)
  const sliderContent = useRef(null)

  let sliderWidth
  useEffect(function() {
    let sliderWidth = slider.current.offsetWidth * props.slides.length
    sliderContent.current.style.setProperty('width', `${sliderWidth}px`)
  })

  const { activeIndex, translate, transition } = state

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * 1000,
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * 1000
    })
  }

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
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
        {props.slides.map(slide =>
          <PortfolioSlide key={slide} content={slide} />
        )}
      </SliderContent>
      <button className="PortfolioSlider__button left" onClick={prevSlide}></button>
      <button className="PortfolioSlider__button right" onClick={nextSlide}></button>
    </div>
  )
}

export default PortfolioSlider