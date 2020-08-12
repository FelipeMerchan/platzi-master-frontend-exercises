import React, { Fragment } from 'react'

import FyloHeader from '../components/FyloHeader'
import FyloHero from '../components/FyloHero'
import FyloHowToWorks from '../components/FyloHowToWorks'
import FyloFeatures from '../components/FyloFeatures'
import './styles/FourteenthWeek.css'

function FourteenthWeek() {
  return (
    <Fragment>
      <div className="u-wrapper bg-intro-fylo">
        <div className="wrapper">
          <FyloHeader />
        </div>
      </div>
      <FyloHero />
      <main className="u-wrapper bg-main-fylo">
        <div className="wrapper">
          <FyloFeatures />
          <FyloHowToWorks />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </main>
    </Fragment>
  )
}

export default FourteenthWeek