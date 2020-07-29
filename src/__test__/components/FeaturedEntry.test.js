import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import FeaturedEntry from '../../components/FeaturedEntry'

describe('Probar el componente <FeaturedEntry />', () => {
  const featuredEntry = shallow(<FeaturedEntry />)

  test('Render del componente FeaturedEntry', () => {
    expect(featuredEntry.length).toEqual(1)
  })
  test('Render de los 2 hijos', () => {
    expect(featuredEntry.children()).toHaveLength(2);
  });
  test('Render del título', () => {
    expect(featuredEntry.find('h2').text()).toEqual('Crea un sitio web usando HTML5')
  })
  test('Render con el className FeaturedEntry__image', () => {
    expect(featuredEntry.exists('.FeaturedEntry__image')).toBeTruthy()
  })
})

describe('FeaturedEntry Snapshot', () => {
  test('Comprobar la UI del componente FeaturedEntry', () => {
    const featuredEntry = create(<FeaturedEntry />)
    expect(featuredEntry.toJSON()).toMatchSnapshot()
  })
})