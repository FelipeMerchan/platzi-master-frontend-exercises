import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import FooterWebSite from '../../components/FooterWebSite'

describe('Probar el componente <FooterWebSite />', () => {
  const footerWebSite = shallow(<FooterWebSite />)

  test('Render del componente FooterWebSite', () => {
    expect(footerWebSite.length).toEqual(1)
  })
  test('Render de los las RRSS', () => {
    expect(footerWebSite.find('.FooterWebSite__social').children()).toHaveLength(4);
  });
  test('Render de los derechos de autor', () => {
    expect(footerWebSite.find('.FooterWebSite__copyright').text()).toEqual('©2012. Todos los derechos reservados')
  })
  test('Render con el className facebook', () => {
    expect(footerWebSite.exists('.facebook')).toBeTruthy()
  })
})

describe('FooterWebSite Snapshot', () => {
  test('Comprobar la UI del componente FooterWebSite', () => {
    const footerWebSite = create(<FooterWebSite />)
    expect(footerWebSite.toJSON()).toMatchSnapshot()
  })
})