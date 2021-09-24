import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`
