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
  const onClick = jest.fn()
  const menuBusiness = mount(<MenuBusiness onClick={onClick} />, { attachTo: document.body })
  const firstButton = menuBusiness.find('#home')
  test('Comprobar que los botones del footer cambien de color a través de los clics de los botones de navegación', () => {
    firstButton.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

describe('MenuBusiness Snapshot', () => {
  test('Comprobar la UI del componente MenuBusiness', () => {
    const menuBusiness = create(<MenuBusiness />)
    expect(menuBusiness.toJSON()).toMatchSnapshot()
  })
})