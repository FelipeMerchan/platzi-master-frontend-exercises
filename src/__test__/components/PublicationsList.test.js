import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import PublicationsList from '../../components/PublicationsList'

describe('Probar el componente <PublicationsList />', () => {
  const publicationsList = shallow(<PublicationsList />)

  test('Render del componente PublicationsList', () => {
    expect(publicationsList.length).toEqual(1)
  })
  test('Render de las publicaciones', () => {
    expect(publicationsList.find('ul').children()).toHaveLength(4);
  });
  test('Render con el className PublicationsList', () => {
    expect(publicationsList.exists('.PublicationsList')).toBeTruthy()
  })
})

describe('PublicationsList Snapshot', () => {
  test('Comprobar la UI del componente PublicationsList', () => {
    const publicationsList = create(<PublicationsList />)
    expect(publicationsList.toJSON()).toMatchSnapshot()
  })
})