import React from 'react'

import Author from './Author'
import './styles/FyloCustomerFeedback.css'

function FyloCustomerFeedback({ description, photo, name, jobTitle }) {
  return (
    <article className="FyloCustomerFeedback">
      <p className="FyloCustomerFeedback__description">{description}</p>
      <Author
        photo={photo}
        name={name}
        jobTitle={jobTitle}
      />
    </article>
  )
}

export default FyloCustomerFeedback