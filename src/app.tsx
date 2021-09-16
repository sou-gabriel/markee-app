import styled, { css } from 'styled-components/macro'

export function App () {
  return (
    <Title>App</Title>
  )
}

const Title = styled.h1`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
`}`
