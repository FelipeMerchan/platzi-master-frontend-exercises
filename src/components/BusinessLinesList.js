import React from 'react'

import BusinessLine from './BusinessLine'
import './styles/BusinessLinesList.css'
import consultancyImage from '../images/consultoria.png'
import trainingImage from '../images/formacion.png'
import analysisImage from '../images/analisis.png'
import searchImage from '../images/investigacion.png'

function BusinessLinesList() {
  return (
    <section className="BusinessLinesList">
        <h1 className="BusinessLinesList__title">
          Soluciones corporativas <br />
          <span>lorem ipsum dolor sit amet, consectetuer adipiscing elit</span>
        </h1>
        <div>
          <BusinessLine
            style={{color: '#5c7e9d'}}
            image={consultancyImage}
            title={"Consultoría"}
            alt={"Consultoría"}
          />
          <BusinessLine
            style={{color: '#78b8b2'}}
            image={trainingImage}
            title={"Formación"}
            alt={"Formación"}
          />
          <BusinessLine
            style={{color: '#e5bb69'}}
            image={analysisImage}
            title={"Análisis"}
            alt={"Análisis"}
          />
          <BusinessLine
            style={{color: '#bb604f'}}
            image={searchImage}
            title={"Investigación"}
            alt={"Investigación"}
          />
        </div>
    </section>
  )
}

export default BusinessLinesList