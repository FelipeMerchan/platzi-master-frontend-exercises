import React, { Fragment } from 'react'

import HeaderBusiness from '../components/HeaderBusiness'
import BusinessLinesList from '../components/BusinessLinesList'
import CompanyInformation from '../components/CompanyInformation'
import { getRandomColor } from '../utils/getRandomColor'

class SixthWeek extends React.Component {
  handleClick = event => {
    const randomColor = getRandomColor()
    const { target } = event

    if (target.dataset.button === 'footer') {
      document.documentElement.style.setProperty('--actionColor', randomColor)
    } else if (target.dataset.button === 'nav') {
      document.documentElement.style.setProperty('--actionColor-2', randomColor)
    }
  }

  render() {
    return (
      <Fragment>
        <main className="u-wrapper bg-gray">
          <div className="wrapper">
            <HeaderBusiness onClick={this.handleClick} />
            <BusinessLinesList />
            <CompanyInformation onClick={this.handleClick} />
          </div>
        </main>
      </Fragment>
    )
  }
}

export default SixthWeek