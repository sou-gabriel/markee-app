import styled from 'styled-components/macro'

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: 'Inconsolate', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 1.888rem;
  color: ${props => props.theme.colors.black};
  resize: none;
`
