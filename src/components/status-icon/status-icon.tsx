import { ReactComponent as EditingIcon } from 'resources/assets/images/editing-icon.svg'
import { ReactComponent as SavedIcon } from 'resources/assets/images/saved-icon.svg'

import { StatusType } from 'resources/types/status'

import * as S from './styles'

type StatusIconProps = {
  status: StatusType
}

export function StatusIcon (props: StatusIconProps) {
  return ({
    editing: <EditingIcon />,
    saving: <S.StyledSavingIcon />,
    saved: <SavedIcon />,
  })[props.status]
}
