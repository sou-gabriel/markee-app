import styled from 'styled-components/macro'

export const Output = styled.output`
  font-size: 1.8rem;
  line-height: 2.344rem;
  color: ${props => props.theme.colors.black};

  > * {
    margin-top: 0;
  }
`
