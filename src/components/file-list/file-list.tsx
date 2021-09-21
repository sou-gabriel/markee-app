import { Dispatch, SetStateAction, RefObject } from 'react'

import { FileItem } from 'components/file-item'

import { FileType } from 'resources/types/file'

import * as S from './styles'

type FileListProps = {
  files: FileType[]
  inputRef: RefObject<HTMLInputElement>
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function FileList ({ files, inputRef, setFiles }: FileListProps) {
  return (
    <S.FileList>
      {files.map(file => (
        <FileItem
          inputRef={inputRef}
          key={file.id}
          file={file}
          setFiles={setFiles}
        />
      ))}
    </S.FileList>
  )
}
