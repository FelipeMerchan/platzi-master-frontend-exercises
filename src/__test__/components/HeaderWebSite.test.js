import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import HeaderWebSite from '../../components/HeaderWebSite'

describe('Probar el componente <HeaderWebSite />', () => {
  const headerWebSite = shallow(<HeaderWebSite />)

  test('Render del componente HeaderWebSite', () => {
    expect(headerWebSite.length).toEqual(1)
  })

  test('Render de los 3 hijos', () => {
    expect(headerWebSite.children()).toHaveLength(3);
  });

  test('Render del título', () => {
    expect(headerWebSite.find('.HeaderWebSite__title').text()).toEqual('Ejercicio Web')
  })
})

describe('HeaderWebSite Snapshot', () => {
  test('Comprobar la interfaz de usuario del componente HeaderWebSite', () => {
    const headerWebSite = create(<HeaderWebSite />)
    expect(headerWebSite.toJSON()).toMatchSnapshot()
  })
})