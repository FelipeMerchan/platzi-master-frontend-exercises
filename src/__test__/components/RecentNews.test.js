import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import RecentNews from '../../components/RecentNews'

describe('Probar el componente <RecentNews />', () => {
  const recentNews = shallow(<RecentNews />)
  test('Render del componente RecentNews', () => {
    expect(recentNews.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(recentNews.find('.RecentNews___title').text()).toEqual('Noticias Recientes')
  })
})

describe('RecentNews Snapshot', () => {
  test('Comprobar la UI del componente RecentNews', () => {
    const recentNews = create(<RecentNews />)
    expect(recentNews.toJSON()).toMatchSnapshot()
  })
})