import { FileItem } from 'components/file-item'

import * as S from './styles'

import { FileType } from 'resources/types/file'

type ListFilesProps = {
  files: FileType[]
}

export function ListFiles (props: ListFilesProps) {
  return (
    <S.ListFiles>
      {props.files.map(file => <FileItem key={file.id} file={file} />)}
    </S.ListFiles>
  )
}
