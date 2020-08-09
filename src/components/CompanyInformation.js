import React from 'react'

import WelcomeMessage from './WelcomeMessage'
import RecentNews from './RecentNews'
import OurServices from './OurServices'

function CompanyInformation(props) {
  return (
    <div className="CompanyInformation d-flex pb-2">
      <WelcomeMessage onClick={props.onClick} />
      <RecentNews onClick={props.onClick} />
      <OurServices onClick={props.onClick} />
    </div>
  )
}

export default CompanyInformation