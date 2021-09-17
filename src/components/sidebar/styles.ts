import styled, { css } from 'styled-components/macro'

export const Sidebar = styled.aside`
  width: 332px;
  height: 100%;
  padding: 45px 32px;
  background-color: ${props => props.theme.colors.black};
`

export const PrimaryTitle = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 56.69px;
`

export const SecondaryTitle = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.white};
`

export const DecorativeLine = styled.span`
  display: inline-block;
  height: 2px;
  border-radius: 999px;
  background-color: ${props => props.theme.colors.primary};
`

export const ReducedDecorativeLine = styled(DecorativeLine)`
  width: 13.5px;
  margin-right: 5.5px;
`

export const LargeDecorativeLine = styled(DecorativeLine)`
  width: 100%;
  margin-left: 6px;
`

export const ButtonNewFile = styled.button`${props => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 33.8px;
  margin-bottom: 32px;
  border-radius: 3.38806px;
  font-weight: 400;
  font-size: 1.355rem;
  color: ${props.theme.colors.lightBlack};
  background-color: ${props.theme.colors.primary};
`}`
