import { MouseEvent } from 'react'

import { StatusIcon } from 'components/status-icon'

import { ReactComponent as FileIcon } from 'resources/assets/images/file-text.svg'
import { ReactComponent as DeleteIcon } from 'resources/assets/images/delete-icon.svg'

import { FileType } from 'resources/types/file'

import * as S from './styles'

type FileItemProps = {
  file: FileType
  onChangeFile: (file: FileType) => (event: MouseEvent<HTMLAnchorElement>) => void
  onDeleteFile: (file: FileType) => () => void
}

export function FileItem (props: FileItemProps) {
  const { file: clickedFile, onChangeFile, onDeleteFile } = props

  return (
    <S.FileItem active={clickedFile.active} status={clickedFile.status}>
      <FileIcon />

      <S.Link href='/' onClick={onChangeFile(clickedFile)}>
        {clickedFile.name}
      </S.Link>

      {clickedFile.active
        ? <StatusIcon status={clickedFile.status} />
        : (
          <S.ButtonDeleteFile onClick={onDeleteFile(clickedFile)}>
            <DeleteIcon />
          </S.ButtonDeleteFile>
          )}
    </S.FileItem>
  )
}
