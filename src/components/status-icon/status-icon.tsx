import { ReactComponent as EditingIcon } from 'assets/images/editing-icon.svg'
import { ReactComponent as SavingIcon } from 'assets/images/saving-icon.svg'
import { ReactComponent as SavedIcon } from 'assets/images/saved-icon.svg'

type StatusIconProps = {
  status: 'editing' | 'saving' | 'saved'
}

export function StatusIcon (props: StatusIconProps) {
  return ({
    editing: <EditingIcon />,
    saving: <SavingIcon />,
    saved: <SavedIcon />,
  })[props.status]
}
