import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import PortfolioFooter from '../../components/PortfolioFooter'

describe('Probar el componente <PortfolioFooter />', () => {
  const portfolioFooter = shallow(<PortfolioFooter />)
  test('Render del componente PortfolioFooter', () => {
    expect(portfolioFooter.length).toEqual(1)
  })
  test('Render del Copyright', () => {
    expect(portfolioFooter.exists('span')).toBeTruthy()
  })
})

describe('PortfolioFooter Snapshot', () => {
  const portfolioFooter = create(<PortfolioFooter />)
  test('Comprobar la UI del componente PortfolioFooter', () => {
    expect(portfolioFooter.toJSON()).toMatchSnapshot()
  })
})