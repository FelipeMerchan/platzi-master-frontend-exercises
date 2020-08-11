import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import PortfolioSlider from '../../components/PortfolioSlider'


describe('Probar el componente <PortfolioSlider />', () => {
  const portfolioSlider = shallow(<PortfolioSlider />)
  test('Render del componente PortfolioSlider', () => {
    expect(portfolioSlider.length).toEqual(1)
  })
  test('Render del contenido y los botones que controlan el slider', () => {
    expect(portfolioSlider.find('PortfolioSlider').children()).toHaveLength(3);
  });
})

describe('Probar los comportamientos del componente PortfolioSlider', () => {
  const onClick = jest.fn()
  const MOCK_IMAGES = [
    '/platzi-master-frontend-exercises/static/media/image-slider.png',
    '/platzi-master-frontend-exercises/static/media/image-slider-2.png'
  ]
  const portfolioSlider = mount(<PortfolioSlider slides={MOCK_IMAGES} onClick={onClick} />, { attachTo: document.body })
  const prevButton = portfolioSlider.find('.PortfolioSlider__button.left')
  test('Comprobar que los botones del slider cambien el contenido que se muestra al usuario a través de los clics de los botones de navegación', () => {
    prevButton.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1);
  });
})

describe('PortfolioSlider Snapshot', () => {
  const portfolioSlider = create(<PortfolioSlider />)
  test('Comprobar la UI del componente PortfolioSlider', () => {
    expect(portfolioSlider.toJSON()).toMatchSnapshot()
  })
})