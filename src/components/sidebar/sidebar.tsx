import { MouseEvent } from 'react'

import { FileItem } from 'components/file-item'

import { ReactComponent as Logo } from 'resources/assets/images/logo.svg'
import { ReactComponent as PlusIcon } from 'resources/assets/images/plus-symbol.svg'
import { FileType } from 'resources/types/file'

import * as S from './styles'

type SidebarProps = {
  files: FileType[]
  onCreateNewFile: () => void
  onChangeFile: (file: FileType) => (event: MouseEvent<HTMLAnchorElement>) => void
  onDeleteFile: (file: FileType) => () => void
}

export function Sidebar (props: SidebarProps) {
  const { files, onCreateNewFile, onChangeFile, onDeleteFile } = props

  return (
    <S.Sidebar>
      <S.PrimaryTitle>
        <Logo />
      </S.PrimaryTitle>

      <S.SecondaryTitle>
        <S.ReducedDecorativeLine />
        Arquivos
        <S.LargeDecorativeLine />
      </S.SecondaryTitle>

      <S.ButtonNewFile onClick={onCreateNewFile}>
        <PlusIcon />
        Adicionar arquivo
      </S.ButtonNewFile>

      <S.FileList>
        {files.map(file => (
          <FileItem
            key={file.id}
            file={file}
            onChangeFile={onChangeFile}
            onDeleteFile={onDeleteFile}
          />
        ))}
      </S.FileList>
    </S.Sidebar>
  )
}
