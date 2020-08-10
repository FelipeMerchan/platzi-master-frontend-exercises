import React from 'react'

import './styles/CustomerFeedback.css'

function CustomerFeedback() {
  return (
    <article className="CustomerFeedback">
      <h2 className="CustomerFeedback__title">feedback
        <br /> <span>de clientes</span>
      </h2>
      <div className="feedback">
        <p>
          <strong>Sra. Lorem Ipsum</strong>
        </p>
        <p>
          <span>"Lorem ipsum dolot sit amet, muy buen trabajo!"</span>
        </p>
      </div>
      <div className="feedback">
        <p>
          <strong>Sra. Lorem Ipsum</strong>
        </p>
        <p>
          <span>"Lorem ipsum dolot, set mat dolor, el mejor diseñador web del mundo"</span>
        </p>
      </div>
    </article>
  )
}

export default CustomerFeedback