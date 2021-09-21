import { Ref, Dispatch, SetStateAction, ChangeEvent } from 'react'

import { FileType } from 'resources/types/file'

import * as S from './styles'

type InputFilenameProps = {
  inputRef: Ref<HTMLInputElement>
  name?: string
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function InputFilename (props: InputFilenameProps) {
  const { inputRef, setFiles, name } = props

  const handleFilenameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedFilename = event.target.value

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.active
      ? { ...file, name: updatedFilename, status: 'editing' }
      : file,
    ))
  }

  return (
    <S.Input
      type='text'
      placeholder='Nome do arquivo'
      ref={inputRef}
      value={name}
      onChange={handleFilenameChange}
    />
  )
}
