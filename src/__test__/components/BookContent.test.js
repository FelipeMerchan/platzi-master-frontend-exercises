import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import BookContent from '../../components/BookContent'

describe('Probar el componente <BookContent />', () => {
  const bookContent = shallow(<BookContent />)

  test('Render del componente BookContent', () => {
    expect(bookContent.length).toEqual(1)
  })
  test('Render del título', () => {
    expect(bookContent.find('.BookContent__title').text()).toEqual('Contenido del libro')
  })
  test('Render con el className BookContent__list', () => {
    expect(bookContent.find('ul').hasClass('BookContent__list')).toBe(true)
  })
})

describe('BookContent Snapshot', () => {
  test('Comprobar la UI del componente BookContent', () => {
    const bookContent = create(<BookContent />)
    expect(bookContent.toJSON()).toMatchSnapshot()
  })
})