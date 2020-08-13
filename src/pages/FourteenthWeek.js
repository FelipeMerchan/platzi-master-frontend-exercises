import React, { Fragment } from 'react'

import FyloHeader from '../components/FyloHeader'
import FyloHero from '../components/FyloHero'
import FyloHowToWorks from '../components/FyloHowToWorks'
import FyloFeatures from '../components/FyloFeatures'
import FyloCustomerFeedback from '../components/FyloCustomerFeedback'
import FyloForm from '../components/FyloForm'
import FyloFooter from '../components/FyloFooter'
import './styles/FourteenthWeek.css'
import photoAutor1 from '../images/fylo/profile-1.jpg'
import photoAutor2 from '../images/fylo/profile-2.jpg'
import photoAutor3 from '../images/fylo/profile-3.jpg'

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
          <section className="FyloCustomerFeedbackList">
            <FyloCustomerFeedback
              description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
              photo={photoAutor1}
              name="Satish Patel"
              jobTitle="Founder & CEO, Huddle"
            />
            <FyloCustomerFeedback
              description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
              photo={photoAutor2}
              name="Bruce McKenzie"
              jobTitle="Founder & CEO, Huddle"
            />
            <FyloCustomerFeedback
              description="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
              photo={photoAutor3}
              name="Iva Boyd"
              jobTitle="Founder & CEO, Huddle"
            />
          </section>
          <FyloForm />
        </div>
      </main>
      <div className="u-wrapper bg-footer-fylo">
        <div className="wrapper">
          <FyloFooter />
        </div>
      </div>
    </Fragment>
  )
}

export default FourteenthWeek