import { StatusIcon } from 'components/status-icon'

import { ReactComponent as FileIcon } from 'assets/images/file-text.svg'
import { ReactComponent as DeleteIcon } from 'assets/images/delete-icon.svg'

import * as S from './styles'

type FileItemProps = {
  file: {
    id: string
    name: string
    content: string
    active: boolean
    status: 'editing' | 'saving' | 'saved'
  }
}

export function FileItem (props: FileItemProps) {
  return (
    <S.FileItem active={props.file.active} status={props.file.status}>
      <FileIcon />
      <S.Link href='/'>{props.file.name}</S.Link>
      {props.file.active
        ? <StatusIcon status={props.file.status} />
        : <S.ButtonDeleteFile><DeleteIcon /></S.ButtonDeleteFile>}
    </S.FileItem>
  )
}
