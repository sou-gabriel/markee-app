import { FileItem } from 'components/file-item'

import * as S from './styles'

import { FileType } from 'resources/types/file'

type FileListProps = {
  files: FileType[]
}

export function FileList (props: FileListProps) {
  return (
    <S.FileList>
      {props.files.map(file => <FileItem key={file.id} file={file} />)}
    </S.FileList>
  )
}
