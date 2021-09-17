import { FileItem } from 'components/file-item'

import * as S from './styles'

type FileType = {
  id: string
  name: string
  content: string
  active: boolean
  status: 'editing' | 'saving' | 'saved'
}

const files: Array<FileType> = [
  {
    id: 'A1',
    name: 'PrimeiroReadme.md',
    content: '',
    active: true,
    status: 'editing',
  },
  {
    id: 'B2',
    name: 'PrimeiroReadme.md',
    content: '',
    active: true,
    status: 'saving',
  },
  {
    id: 'C3',
    name: 'PrimeiroReadme.md',
    content: '',
    active: true,
    status: 'saved',
  },
  {
    id: 'D4',
    name: 'PrimeiroReadme.md',
    content: '',
    active: false,
    status: 'editing',
  },
]

export function ListFiles () {
  return (
    <S.ListFiles>
      {files.map(file => <FileItem key={file.id} file={file} />)}
    </S.ListFiles>
  )
}