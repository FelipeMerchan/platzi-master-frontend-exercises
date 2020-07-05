import React from 'react'

import WelcomeMessage from './WelcomeMessage'
import RecentNews from './RecentNews'
import OurServices from './OurServices'

function CompanyInformation() {
  return (
    <div className="CompanyInformation d-flex pb-2">
      <WelcomeMessage />
      <RecentNews />
      <OurServices />
    </div>
  )
}

export default CompanyInformation