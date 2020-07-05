import React, { Fragment } from 'react'

import HeaderHome from '../components/HeaderHome'
import Hero from '../components/Hero'
import Exercises from '../components/Exercises'
import './styles/Home.css'

class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <main className="u-wrapper bg-dark-blue">
          <div className="wrapper">
            <HeaderHome />
            <Hero />
            <Exercises />
          </div>
        </main>
      </Fragment>
    )
  }
}

export default Home