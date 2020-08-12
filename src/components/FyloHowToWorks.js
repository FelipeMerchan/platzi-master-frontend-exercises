import React from 'react'

import './styles/FyloHowToWorks.css'
import illustrationStayProductive from '../images/fylo/illustration-stay-productive.png'

function FyloHowToWorks() {
  return (
    <section className="FyloHowToWorks">
      <figure className="FyloHowToWorks__imageContainer">
        <img className="FyloHowToWorks__image" src={illustrationStayProductive} width="350" alt="Mantente productivo" />
      </figure>
      <div>
        <h2 className="FyloHowToWorks__title">Stay productive, wherever you are</h2>
        <p className="FyloHowToWorks__description">
          Never let location be an issue when accesing your files. Fylo 
          has you covered for all of your file storage needs.
        </p>
        <p className="FyloHowToWorks__description">
          Securely share files and folders with friends, family and colleagues 
          for live collaboration. No email attachments required.
        </p>
        <a className="FylohowToWorks__link" href="#howWorks" id="howWorks">
          See how Fylo works
        </a>
      </div>
    </section>
  )
}

export default FyloHowToWorks