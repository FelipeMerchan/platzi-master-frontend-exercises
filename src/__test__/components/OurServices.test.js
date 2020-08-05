import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import OurServices from '../../components/OurServices'

describe('Probar el componente <OurServices />', () => {
  const ourServices = shallow(<OurServices />)
  test('Render del componente OurServices', () => {
    expect(ourServices.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(ourServices.find('.OurServices___title').text()).toEqual('Nuestros Servicios')
  })
  test('Render de los 7 servicios que ofrecemos', () => {
    expect(ourServices.find('.OurServices__list').children()).toHaveLength(7);
  });
})

describe('OurServices Snapshot', () => {
  test('Comprobar la UI del componente OurServices', () => {
    const ourServices = create(<OurServices />)
    expect(ourServices.toJSON()).toMatchSnapshot()
  })
})