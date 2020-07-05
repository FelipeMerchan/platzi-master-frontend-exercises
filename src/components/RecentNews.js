import React from 'react'

import './styles/RecentNews.css'

function RecentNews() {
  return (
    <section className="RecentNews">
      <h2 className="RecentNews___title">Noticias Recientes</h2>
      <div>
        <h5 className="RecentNews__date">Publicada: 09.09.2012</h5>
        <p className="RecentNews__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
          ullamcorper.
        </p>
      </div>
      <div>
        <h5 className="RecentNews__date">Publicada: 09.09.2012</h5>
        <p className="RecentNews__text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut wisi enim ad minim veniam, quis nostrud exerci tation 
          ullamcorper.
        </p>
      </div>
      <div className="mt-2">
        <a className="button" href="/" target="_blank">Más noticias</a>
      </div>
    </section>
  )
}

export default RecentNews