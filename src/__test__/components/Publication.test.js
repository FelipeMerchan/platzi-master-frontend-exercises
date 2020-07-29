import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import Publication from '../../components/Publication'

describe('Probar el componente <Publication />', () => {
  const publication = shallow(<Publication />)

  test('Render del componente Publication', () => {
    expect(publication.length).toEqual(1)
  })
  test('Render de los 2 hijos', () => {
    expect(publication.children()).toHaveLength(2);
  });
  test('Render con el className Publication__link', () => {
    expect(publication.exists('.Publication__link')).toBeTruthy()
  })
})

describe('Publication Snapshot', () => {
  test('Comprobar la UI del componente Publication', () => {
    const publication = create(<Publication />)
    expect(publication.toJSON()).toMatchSnapshot()
  })
})