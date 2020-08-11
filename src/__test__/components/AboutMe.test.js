import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import AboutMe from '../../components/AboutMe'

describe('Probar el componente <AboutMe />', () => {
  const aboutMe = shallow(<AboutMe />)
  test('Render del componente AboutMe', () => {
    expect(aboutMe.length).toEqual(1)
  })
  test('Render con el className AboutMe__title', () => {
    expect(aboutMe.exists('.AboutMe__title')).toBeTruthy()
  })
  test('Render de la descripción del autor', () => {
    expect(aboutMe.find('.AboutMe__description').text()).toEqual('Etiam lectus nulla, vestibulum vel luctus eu, ultricie Sit amet arcu. In a sem a nibh fringilla blandit. Ut u Metus turpis ultricies.')
  })
})

describe('AboutMe Snapshot', () => {
  const aboutMe = create(<AboutMe />)
  test('Comprobar la UI del componente AboutMe', () => {
    expect(aboutMe.toJSON()).toMatchSnapshot()
  })
})