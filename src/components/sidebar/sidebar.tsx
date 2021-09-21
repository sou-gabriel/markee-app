import { RefObject, Dispatch, SetStateAction } from 'react'

import { v4 as uuid } from 'uuid'

import { FileItem } from 'components/file-item'

import { ReactComponent as Logo } from 'resources/assets/images/logo.svg'
import { ReactComponent as PlusIcon } from 'resources/assets/images/plus-symbol.svg'
import { FileType } from 'resources/types/file'

import * as S from './styles'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
  files: FileType[]
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function Sidebar ({ inputRef, files, setFiles }: SidebarProps) {
  const handleButtonNewFileClick = () => {
    inputRef.current?.focus()

    const inactiveFiles = files.map<FileType>(file => ({
      ...file,
      active: false,
    }))

    setFiles([...inactiveFiles, {
      id: uuid(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }])
  }

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

      <S.ButtonNewFile onClick={handleButtonNewFileClick}>
        <PlusIcon />
        Adicionar arquivo
      </S.ButtonNewFile>

      <S.FileList>
        {files.map(file => (
          <FileItem
            key={file.id}
            inputRef={inputRef}
            file={file}
            setFiles={setFiles}
          />
        ))}
      </S.FileList>
    </S.Sidebar>
  )
}
