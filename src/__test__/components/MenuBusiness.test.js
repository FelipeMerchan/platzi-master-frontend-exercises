import React from 'react'
import { mount, shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import MenuBusiness from '../../components/MenuBusiness'

describe('Probar el componente <MenuBusiness />', () => {
  const menuBusiness = shallow(<MenuBusiness />)
  test('Render del componente MenuBusiness', () => {
    expect(menuBusiness.length).toEqual(1)
  })
  test('Render con el className MenuBusiness', () => {
    expect(menuBusiness.find('nav').hasClass('MenuBusiness')).toBe(true)
  })

  test('Render de los 5 elementos de lista del menú', () => {
    expect(menuBusiness.find('ul').children()).toHaveLength(5);
  });
})


describe('Probar los comportamientos del componente MenuBusiness', () => {
  window.console.log = jest.fn()
  const menuBusiness = mount(<MenuBusiness />, { attachTo: document.body })
  const firstButton = menuBusiness.find('#home')
  test('Comprobar la lógica en los clics de los botones de navegación a través de los mensajes en la consola del navegador', () => {
    firstButton.simulate('click')
    expect(window.console.log).toHaveBeenCalledWith('I´m not propagating')
  });
})

describe('MenuBusiness Snapshot', () => {
  test('Comprobar la UI del componente MenuBusiness', () => {
    const menuBusiness = create(<MenuBusiness />)
    expect(menuBusiness.toJSON()).toMatchSnapshot()
  })
})