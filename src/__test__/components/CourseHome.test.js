import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import CourseHome from  '../../components/CourseHome'

describe('Probar el componente <CourseHome />', () => {
  const courseHome = shallow(<CourseHome />)

  test('Render del componente CourseHome', () => {
    expect(courseHome.length).toEqual(1)
  })
})

describe('CourseHome Snapshot', () => {
  test('Comprobar la UI del componente CourseHome', () => {
    const courseHome = create(<CourseHome />)
    expect(courseHome.toJSON()).toMatchSnapshot()
  })
})