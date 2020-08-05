import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import BusinessLine from '../../components/BusinessLine'

describe('Probar el componente <BusinessLine />', () => {
  const businessLine = shallow(<BusinessLine />)
  test('Render del componente BusinessLine', () => {
    expect(businessLine.length).toEqual(1)
  })
  test('Render de la descripción de la línea de negocio', () => {
    expect(businessLine.find('.BusinessLine__description').text()).toEqual('Lorem ipsum dolor sit amet, consectetuer aiscing elit.')
  })
})

describe('BusinessLine Snapshot', () => {
  test('Comprobar la UI del componente BusinessLine', () => {
    const businessLine = create(<BusinessLine />)
    expect(businessLine.toJSON()).toMatchSnapshot()
  })
})