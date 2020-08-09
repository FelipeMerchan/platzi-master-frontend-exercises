import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import FirstWeek from './pages/FirstWeek'
import FourthWeek from './pages/FourthWeek'
import FifthWeek from './pages/FifthWeek'
import SixthWeek from './pages/SixthWeek'
import ThirteenthWeek from './pages/ThirteenthWeek'
import './globals.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={ Home } />
        <Route exact path={`${process.env.PUBLIC_URL}/primera-semana`} component={ FirstWeek } />
        <Route exact path={`${process.env.PUBLIC_URL}/cuarta-semana`} component={ FourthWeek } />
        <Route exact path={`${process.env.PUBLIC_URL}/quinta-semana`} component={ FifthWeek } />
        <Route exact path={`${process.env.PUBLIC_URL}/sexta-semana`} component={ SixthWeek } />
        <Route exact path={`${process.env.PUBLIC_URL}/decima-tercera-semana`} component={ ThirteenthWeek } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;