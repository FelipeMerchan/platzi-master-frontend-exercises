import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import WelcomeMessage from '../../components/WelcomeMessage'

describe('Probar el componente <WelcomeMessage />', () => {
  const welcomeMessage = shallow(<WelcomeMessage />)
  test('Render del componente WelcomeMessage', () => {
    expect(welcomeMessage.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(welcomeMessage.find('.WelcomeMessage___title').text()).toEqual('¡Bienvenido!')
  })
})

describe('Probar los comportamientos del componente WelcomeMessage', () => {
  const onClick = jest.fn()
  const welcomeMessage = mount(<WelcomeMessage onClick={onClick} />, { attachTo: document.body })
  test('Comprobar que los botones del nav cambien de color a través del clic en el botón de leer más', () => {
    welcomeMessage.find('.button').simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

describe('WelcomeMessage Snapshot', () => {
  test('Comprobar la UI del componente WelcomeMessage', () => {
    const welcomeMessage = create(<WelcomeMessage />)
    expect(welcomeMessage.toJSON()).toMatchSnapshot()
  })
})