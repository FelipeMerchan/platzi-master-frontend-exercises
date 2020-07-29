import React from 'react'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'
import '../../setupTest'
import RandomPublication from '../../components/RandomPublication'

describe('Probar el componente <RandomPublication />', () => {
  const randomPublication = shallow(<RandomPublication />)

  test('Render del componente RandomPublication', () => {
    expect(randomPublication.length).toEqual(1)
  })
  test('Render de la imagen y los detalles', () => {
    expect(randomPublication.find('article').children()).toHaveLength(2);
  });
  test('Render del párrafo', () => {
    expect(randomPublication.find('p').text()).toEqual('Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.')
  })
  test('Render con el className RandomPublication', () => {
    expect(randomPublication.exists('.RandomPublication')).toBeTruthy()
  })
})

describe('RandomPublication Snapshot', () => {
  test('Comprobar la UI del componente RandomPublication', () => {
    const randomPublication = create(<RandomPublication />)
    expect(randomPublication.toJSON()).toMatchSnapshot()
  })
})