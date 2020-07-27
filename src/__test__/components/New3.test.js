import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import New3 from '../../components/New3'

describe('Probar el componente <New3 />', () => {
  const new3 = shallow(<New3 />)

  test('Render del componente New3',() => {
    expect(new3.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(new3.find('h3').text()).toEqual('Lorem ipsum dolor sit amet, consectetuer adipiscing elit')
  })
  test('Render con el className text-center', () => {
    expect(new3.find('section').hasClass('New3')).toBe(true)
  })
})

describe('New3 Snapshot', () => {
  test('Comprobar la interfaz de usuario del componente New3', () => {
    const new3 = create(<New3 />)
    expect(new3.toJSON()).toMatchSnapshot()
  })
})