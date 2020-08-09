import styled from 'styled-components'

export const SliderContent = styled.div`
  display: flex;
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}step-end;
  height: 100%;
  width: ${props => props.width}px;
`