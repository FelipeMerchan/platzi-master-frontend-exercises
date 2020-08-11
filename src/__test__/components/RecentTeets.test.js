import React from 'react'
import { shallow, mount } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import RecentTweets from '../../components/RecentTweets'

describe('Probar el componente <RecentTweets />', () => {
  const recentTweets = shallow(<RecentTweets />)
  test('Render del componente RecentTweets', () => {
    expect(recentTweets.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(recentTweets.exists('.RecentTweets__title')).toBeTruthy()
  })
  test('Render de los dos últimos tweets', () => {
    expect(recentTweets.children()).toHaveLength(3);
  });
})

describe('RecentTweets Snapshot', () => {
  const recentTweets = create(<RecentTweets />)
  test('Comprobar la UI del componente RecentTweets', () => {
    expect(recentTweets.toJSON()).toMatchSnapshot()
  })
})