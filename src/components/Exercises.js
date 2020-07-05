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
            title="Primera Semana"
            difficulty="Easy"
            link="/primera-semana"
            alt="Página del periódico The New York Times"
          />
          <Exercise
            image={fourthWeekPoster}
            title="Cuarta Semana"
            difficulty="Easy"
            link="/cuarta-semana"
            alt="Página del curso de HTMl y CSS práctico"
          />
          <Exercise
            image={fifthWeekPoster}
            title="Quinta Semana"
            difficulty="Medium"
            link="/quinta-semana"
            alt="Página de ejercicio web"
          />
          <Exercise
            image={sixthWeekPoster}
            title="Sexta Semana"
            difficulty="Hard"
            link="/sexta-semana"
            alt="Página para empresa"
          />
        </div>
      </section>
    </div>
  )
}

export default Exercises