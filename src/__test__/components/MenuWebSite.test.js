import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import MenuWebSite from '../../components/MenuWebSite'

describe('Probar el componente <MenuWebSite />', () => {
  const menuWebSite = shallow(<MenuWebSite />)
  test('Render del componente MenuWebSite', () => {
    expect(menuWebSite.length).toEqual(1)
  })
  test('Render con el className MenuWebSite', () => {
    expect(menuWebSite.find('nav').hasClass('MenuWebSite')).toBe(true)
  })
})

describe('Probar el estado active del componente MenuWebSite', () => {
  const menuWebSite = mount(<MenuWebSite />)
  const firstButton = menuWebSite.find('#home')
  test('Comprobar los clics en los botones de navegación a través de los mensajes en la consola', () => {
    firstButton.simulate('click')
    expect(global.console.log).toHaveBeenCalledWith('I´m not propagating')
  });
  test('Render con el className is-active', () => {
    expect(menuWebSite.exists('.is-active')).toBeTruthy()
  })
})

describe('MenuWebSite Snapshot', () => {
  test('Comprobar la UI del componente MenuWebSite', () => {
    const menuWebSite = create(<MenuWebSite />)
    expect(menuWebSite.toJSON()).toMatchSnapshot()
  })
})