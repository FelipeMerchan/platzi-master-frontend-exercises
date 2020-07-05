import React, { Fragment } from 'react'

import HeaderBusiness from '../components/HeaderBusiness'
import BusinessLinesList from '../components/BusinessLinesList'
import CompanyInformation from '../components/CompanyInformation'

class SixthWeek extends React.Component {
  render() {
    return (
      <Fragment>
        <main className="u-wrapper bg-gray">
          <div className="wrapper">
            <HeaderBusiness />
            <BusinessLinesList />
            <CompanyInformation />
          </div>
        </main>
      </Fragment>
    )
  }
}

export default SixthWeek