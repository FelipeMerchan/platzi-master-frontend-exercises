import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import New4 from '../../components/New4'

describe('Probar el componente <New4 />', () => {
  const new4 = shallow(<New4 />)

  test('Render del componente New4', () => {
    expect(new4.length).toEqual(1)
  })
  test('Comprobar el título', () => {
    expect(new4.find('h3').text()).toEqual('Lorem ipsum dolor sit amet, consectetuer adipiscing elit')
  })
  test('Render con el className float-left', () => {
    expect(new4.find('h5').hasClass('float-left')).toBe(true)
  })
})

describe('New4 Snapshot', () => {
  test('Comprobar la interfaz de usuario de New4', () => {
    const new4 = create(<New4 />)
    expect(new4.toJSON()).toMatchSnapshot()
  })
})