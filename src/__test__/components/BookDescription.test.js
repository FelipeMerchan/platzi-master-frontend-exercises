import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import BookDescription from '../../components/BookDescription'

describe('Probar el componente <BookDescription />', () => {
  const bookDescription = shallow(<BookDescription />)

  test('Render del componente BookDescription', () => {
    expect(bookDescription.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(bookDescription.find('.BookDescription__title').text()).toEqual('Descripción del libro')
  })
  test('Render con el className BookDescription__text', () => {
    expect(bookDescription.find('p').last().hasClass('BookDescription__text')).toBe(true)
  })
})

describe('BookDescription Snapshot', () => {
  test('Comprobar la UI del componente BookDescription', () => {
    const bookDescription = create(<BookDescription />)
    expect(bookDescription.toJSON()).toMatchSnapshot()
  })
})