import React from 'react'

import Publication from './Publication'
import './styles/PublicationsList.css'
import data from '../data.json'

function PublicationsList() {
  return (
    <section className="PublicationsList">
      <ul>
        {data.results.map(publication => (
          <li key={publication.id}>
            <Publication
              date={publication.date}
              autor={publication.autor}
              comments={publication.comments}
              title={publication.title}
              summary={publication.summary}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PublicationsList