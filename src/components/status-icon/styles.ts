import { ReactComponent as SavingIcon } from 'assets/images/saving-icon.svg'

import styled, { keyframes } from 'styled-components/macro'

export const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg);
  }
`

export const StyledSavingIcon = styled(SavingIcon)`
  animation: ${rotate} 1s linear infinite;
`
