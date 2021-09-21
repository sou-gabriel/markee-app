import { MouseEvent, Dispatch, SetStateAction, RefObject } from 'react'

import { StatusIcon } from 'components/status-icon'

import { ReactComponent as FileIcon } from 'resources/assets/images/file-text.svg'
import { ReactComponent as DeleteIcon } from 'resources/assets/images/delete-icon.svg'

import * as S from './styles'

import { FileType } from 'resources/types/file'

type FileItemProps = {
  inputRef: RefObject<HTMLInputElement>
  file: FileType
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function FileItem ({ inputRef, file: clickedFile, setFiles }: FileItemProps) {
  const handleFileChange = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    inputRef.current?.focus()

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.id === clickedFile.id
      ? { ...file, active: true }
      : { ...file, active: false },
    ))
  }

  const handleDeleteFile = () => {
    inputRef.current?.focus()

    setFiles(prevFiles =>
      prevFiles.filter(prevFile => prevFile.id !== clickedFile.id),
    )
  }

  return (
    <S.FileItem active={clickedFile.active} status={clickedFile.status}>
      <FileIcon />
      <S.Link href='/' onClick={handleFileChange}>{clickedFile.name}</S.Link>
      {clickedFile.active
        ? <StatusIcon status={clickedFile.status} />
        : <S.ButtonDeleteFile onClick={handleDeleteFile}><DeleteIcon /></S.ButtonDeleteFile>}
    </S.FileItem>
  )
}
