import React from 'react'
import { create } from 'react-test-renderer'
import { shallow } from 'enzyme'
import '../../setupTest'
import HeaderBusiness from '../../components/HeaderBusiness'
import brandImage from '../../images/brand.JPG'

describe('Probar el componente <HeaderBusiness />', () => {
  const headerBusiness = shallow(<HeaderBusiness />)
  test('Render del componente HeaderBusiness', () => {
    expect(headerBusiness.length).toEqual(1)
  })
  test('Render de el logotipo', () => {
    expect(headerBusiness.find('img').prop('src')).toEqual(brandImage)
  })
})

describe('HeaderBusiness Snapshot', () => {
  const headerBusiness = create(<HeaderBusiness />)
  test('Validar la UI del componente HeaderBusiness', () => {
    expect(headerBusiness.toJSON()).toMatchSnapshot()
  })
})