import React from 'react'

import LeftNew from './LeftNew'
import MainNew from './MainNew'
import New3 from './New3'
import New4 from './New4'
import './styles/NewsHome.css'

function NewsHome() {
  return (
    <main className="l-grid mt">
      <div className="column-1">
        <LeftNew />
      </div>
      <div className="column-2">
        <MainNew />
        <New3 />
        <New4 />
      </div>
    <div className="column-3"></div>
  </main>
  )
}

export default NewsHome