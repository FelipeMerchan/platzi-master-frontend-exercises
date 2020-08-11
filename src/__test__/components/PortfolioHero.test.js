import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import PortfolioHero from '../../components/PortfolioHero'
import title from '../../images/portfolio-felipe-merchan.png'

describe('Probar el componente <PortfolioHero />', () => {
  const portfolioHero = shallow(<PortfolioHero />)
  test('Render del componente PortfolioHero',() => {
    expect(portfolioHero.length).toEqual(1)
  })
  test('Render del título con el nombre del autor', () => {
    expect(portfolioHero.find('img').prop('src')).toEqual(title)
  })
  test('Render con el className PortfolioHero__title', () => {
    expect(portfolioHero.find('h1').hasClass('PortfolioHero__title')).toBe(true)
  })
})

describe('PortfolioHero Snapshot', () => {
  const portfolioHero = create(<PortfolioHero />)
  test('Comprobar la UI del componente PortfolioHero', () => {
    expect(portfolioHero.toJSON()).toMatchSnapshot()
  })
})