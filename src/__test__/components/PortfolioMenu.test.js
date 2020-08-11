import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import PortfolioMenu from '../../components/PortfolioMenu'

describe('Probar el componente <PortfolioMenu />', () => {
  const portfolioMenu = shallow(<PortfolioMenu />)
  test('Render del componente PortfolioMenu', () => {
    expect(portfolioMenu.length).toEqual(1)
  })
  test('Render de los 4 botones del menú', () => {
    expect(portfolioMenu.find('ul').children()).toHaveLength(4);
  });
})

describe('Probar los comportamientos del componente PortfolioMenu', () => {
  const onClick = jest.fn()
  const portfolioMenu = mount(<PortfolioMenu onClick={onClick} />, { attachTo: document.body })
  const homeButton = portfolioMenu.find('#home')
  test('Comprobar que los botones del footer cambien de color a través de los clics de los botones de navegación', () => {
    homeButton.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

describe('PortfolioMenu Snapshot', () => {
  const portfolioMenu = create(<PortfolioMenu />)
  test('Comprobar la UI del componente PortfolioMenu', () => {
    expect(portfolioMenu.toJSON()).toMatchSnapshot()
  })
})