import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import SocialMedia from '../../components/SocialMedia'

describe('Probar el componente <SocialMedia />', () => {
  const socialMedia = shallow(<SocialMedia />)
  test('Render del componente SocialMedia', () => {
    expect(socialMedia.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(socialMedia.exists('.SocialMedia__title')).toBeTruthy()
  })
  test('Render de todas las RRSS en las que se tiene presencia', () => {
    expect(socialMedia.children()).toHaveLength(5);
  });
})

describe('SocialMedia Snapshot', () => {
  const socialMedia = create(<SocialMedia />)
  test('Comprobar la UI del componente SocialMedia', () => {
    expect(socialMedia.toJSON()).toMatchSnapshot()
  })
})