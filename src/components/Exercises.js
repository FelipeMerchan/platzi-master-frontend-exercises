import React from 'react'

import Exercise from './Exercise'
import './styles/Exercises.css'
import firstWeekPoster from '../images/primera-semana-poster.png'
import fourthWeekPoster from '../images/cuarta-semana-poster.png'
import fifthWeekPoster from '../images/quinta-semana-poster.png'
import sixthWeekPoster from '../images/sexta-semana-poster.png'

function Exercises() {
  return (
    <div>
      <section className="Exercises" id="exercises">
        <h2 className="Exercises__title text-uppercase">Explora los ejercicios</h2>
        <div className="ExercisesLists">
          <Exercise
            image={firstWeekPoster}
            title="Semana: 1"
            difficulty="Fácil"
            link={`${process.env.PUBLIC_URL}/primera-semana`}
            alt="Página del periódico The New York Times"
          />
          <Exercise
            image={fourthWeekPoster}
            title="Semana: 4"
            difficulty="Fácil"
            link={`${process.env.PUBLIC_URL}/cuarta-semana`}
            alt="Página del curso de HTMl y CSS práctico"
          />
          <Exercise
            image={fifthWeekPoster}
            title="Semana: 5"
            difficulty="Normal"
            link={`${process.env.PUBLIC_URL}/quinta-semana`}
            alt="Página de ejercicio web"
          />
          <Exercise
            image={sixthWeekPoster}
            title="Semana: 6"
            difficulty="Difícil"
            link={`${process.env.PUBLIC_URL}/sexta-semana`}
            alt="Página para empresa"
          />
          <Exercise
            image={sixthWeekPoster}
            title="Semana: 13"
            difficulty="Difícil"
            link={`${process.env.PUBLIC_URL}/decima-tercera-semana`}
            alt="Página para un portafolio"
          />
        </div>
      </section>
    </div>
  )
}

export default Exercises