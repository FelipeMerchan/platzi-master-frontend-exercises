import React, { Fragment } from 'react'

import HeaderWebSite from '../components/HeaderWebSite'
import FeaturedEntry from '../components/FeaturedEntry'
import PublicationsList from '../components/PublicationsList'
import RandomPublication from '../components/RandomPublication'
import FooterWebSite from '../components/FooterWebSite'
import './styles/FifthWeek.css'

function FifthWeek() {
  return (
    <Fragment>
      <main className="u-wrapper bg-gray">
        <div className="wrapper">
          <HeaderWebSite />
          <FeaturedEntry />
          <PublicationsList />
          <RandomPublication />
          <FooterWebSite />
        </div>
      </main>
    </Fragment>
  )
}

export default FifthWeek