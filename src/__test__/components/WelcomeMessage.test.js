import React from 'react'
import { shallow } from 'enzyme'
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

describe('WelcomeMessage Snapshot', () => {
  test('Comprobar la UI del componente WelcomeMessage', () => {
    const welcomeMessage = create(<WelcomeMessage />)
    expect(welcomeMessage.toJSON()).toMatchSnapshot()
  })
})