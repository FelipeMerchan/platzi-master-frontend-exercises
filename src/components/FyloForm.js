import React from 'react'

import './styles/FyloForm.css'

function FyloForm() {
  return (
    <div className="FyloForm text-center">
      <h3 className="FyloForm__title">Get early access today</h3>
      <p className="FyloForm__description">
        It only takes a minute to sign up and our 
        free starter tier is extremely generous. If you 
        have any questions, our support team would be happy 
        to help you.
      </p>
      <form>
        <input className="FyloForm__input" type="email" placeholder="email@example.com" />
        <button className="FyloForm__button">Get Started For Free</button>
      </form>
    </div>
  )
}

export default FyloForm