import React from 'react'

import BookData from './BookData'
import BookDescription from './BookDescription'
import BookContent from './BookContent'
import './styles/CourseHome.css'

function CourseHome() {
  return (
    <main className="CourseHome">
      <BookData />
      <div>
        <BookDescription />
        <BookContent />
      </div>
    </main>
  )
}

export default CourseHome