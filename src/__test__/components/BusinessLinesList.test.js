import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import BusinessLinesList from '../../components/BusinessLinesList'

describe('Probar el componente <BusinessLinesList />', () => {
  const businessLinesList = shallow(<BusinessLinesList />)
  test('Render del componente BusinessLinesList', () => {
    expect(businessLinesList.length).toEqual(1)
  })
  test('Render con el className BusinessLinesList__title', () => {
    expect(businessLinesList.find('h1').hasClass('BusinessLinesList__title')).toBe(true)
  })
  test('Validar el render de las 4 líneas de negocio', () => {
    expect(businessLinesList.find('div').children()).toHaveLength(4);
  });
})

describe('BusinessLinesList Snapshot', () => {
  const businessLinesList = create(<BusinessLinesList />)
  test('Comprobar la UI del componente BusinessLinesList', () => {
    expect(businessLinesList.toJSON()).toMatchSnapshot()
  })
})