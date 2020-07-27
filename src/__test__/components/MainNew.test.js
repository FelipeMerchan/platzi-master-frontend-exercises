import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import MainNew from '../../components/MainNew'

describe('Probar el componente <MainNew />', () => {
  const mainNew = shallow(<MainNew />)

  test('Render del componente MainNew', () => {
    expect(mainNew.length).toEqual(1)
  })
  test('Render del caption', () => {
    expect(mainNew.find('figcaption').text()).toEqual('Lorem ipsum dolor sit amet, consectetuer')
  })
  test('Render con el className text-justify', () => {
    expect(mainNew.find('p').hasClass('text-justify')).toBe(true)
  })
})

describe('MainNew Snapshot', () => {
  test('Comprobar la UI del componente MainNew', () => {
    const mainNew = create(<MainNew />)
    expect(mainNew.toJSON()).toMatchSnapshot()
  })
})