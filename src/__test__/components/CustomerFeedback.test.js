import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import CustomerFeedback from '../../components/CustomerFeedback'

describe('Probar el componente <CustomerFeedback />', () => {
  const customerFeedback = shallow(<CustomerFeedback />)
  test('Render del componente CustomerFeedback', () => {
    expect(customerFeedback.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(customerFeedback.exists('.CustomerFeedback__title')).toBeTruthy()
  })
  test('Render la retroalimentación por parte de dos clientes', () => {
    expect(customerFeedback.children()).toHaveLength(3);
  });
})

describe('CustomerFeedback Snapshot', () => {
  const customerFeedback = create(<CustomerFeedback />)
  test('Comprobar la UI del componente CustomerFeedback', () => {
    expect(customerFeedback.toJSON()).toMatchSnapshot()
  })
})