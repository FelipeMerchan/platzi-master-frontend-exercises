import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import BookData from '../../components/BookData'

describe('Probar el componente <BookData />', () => {
  const bookData = shallow(<BookData />)

  test('Render del componente BookData', () => {
    expect(bookData.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(bookData.find('.BookData__title').text()).toEqual('Datos del libro')
  })
  test('Render con el className BookData__list', () => {
    expect(bookData.find('ul').hasClass('BookData__list')).toBe(true)
  })
})

describe('BookData Snapshot', () => {
  test('Comprobar la UI del componente BookData', () => {
    const bookData = create(<BookData />)
    expect(bookData.toJSON()).toMatchSnapshot()
  })
})