import styled from 'styled-components/macro'

export const Input = styled.input`
  width: 100%;
  height: 23px;
  margin-left: 12px;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.344rem;
  letter-spacing: -2%;
  color: ${props => props.theme.colors.black};
`
