import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import MyServices from '../../components/MyServices'

describe('Probar el componente <MyServices />', () => {
  const myServices = shallow(<MyServices />)
  test('Render del componente MyServices', () => {
    expect(myServices.length).toEqual(1)
  })
  test('Render con el className MyServices__title', () => {
    expect(myServices.exists('.MyServices__title')).toBeTruthy()
  })
  test('Render de los 3 servicios destacados', () => {
    expect(myServices.find('.MyServices__details').children()).toHaveLength(3);
  });
})

describe('MyServices Snapshot', () => {
  const myServices = create(<MyServices />)
  test('Comprobar la UI del componente MyServices', () => {
    expect(myServices.toJSON()).toMatchSnapshot()
  })
})