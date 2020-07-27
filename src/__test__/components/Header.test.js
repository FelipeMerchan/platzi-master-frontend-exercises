import React from 'react'
import { mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import Header from '../../components/Header'

describe('Probar el componente <Header />', () => {
  const header = mount(<Header />)

  test('Render del componente Header', () => {
    expect(header.length).toEqual(1)
  })
  test('Render de la subcabecera', () => {
    expect(header.find('h2').text()).toEqual('Contenido de subcabecera')
  })
})

describe('Header Snapshot', () => {
  test('Comprobar la interfaz de usuario del componente Footer', () => {
    const header = create(<Header />)
    expect(header.toJSON()).toMatchSnapshot()
  })
})