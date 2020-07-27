import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import LeftNotice from '../../components/LeftNotice'

describe('Probar el componente <LeftNotice />', () => {
  const leftNotice = shallow(<LeftNotice />)

  test('Render del componente LeftNotice',() => {
    expect(leftNotice.length).toEqual(1)
  })
  test('Render del título principal', () => {
    expect(leftNotice.find('h1').text()).toEqual('Lorem ipsum dolor sit amet')
  })
  test('Render con el className text-center', () => {
    expect(leftNotice.find('h4').hasClass('text-center')).toBe(true)
  })
})

describe('LeftNotice Snapshot', () => {
  test('Comprobar la interfaz de usuario del componente LeftNotice', () => {
    const leftNotice = create(<LeftNotice />)
    expect(leftNotice.toJSON()).toMatchSnapshot()
  })
})