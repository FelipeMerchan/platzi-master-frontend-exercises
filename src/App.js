import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import FirstWeek from './pages/FirstWeek'
import FourthWeek from './pages/FourthWeek'
import FifthWeek from './pages/FifthWeek'
import SixthWeek from './pages/SixthWeek'
import './globals.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/primera-semana" component={ FirstWeek } />
        <Route exact path="/cuarta-semana" component={ FourthWeek } />
        <Route exact path="/quinta-semana" component={ FifthWeek } />
        <Route exact path="/sexta-semana" component={ SixthWeek } />
      </Switch>
    </BrowserRouter>
  )
}

export default App;