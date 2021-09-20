import { StatusIcon } from 'components/status-icon'

import { ReactComponent as FileIcon } from 'resources/assets/images/file-text.svg'
import { ReactComponent as DeleteIcon } from 'resources/assets/images/delete-icon.svg'

import * as S from './styles'

import { FileType } from 'resources/types/file'

type FileItemProps = {
  file: FileType
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
