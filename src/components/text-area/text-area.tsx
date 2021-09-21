import { Dispatch, ChangeEvent, SetStateAction } from 'react'

import { FileType } from 'resources/types/file'

import * as S from './styles'

type TextAreaProps = {
  content?: string
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function TextArea ({ content, setFiles }: TextAreaProps) {
  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedValueOfTextArea = event?.target.value

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.active
      ? { ...file, content: updatedValueOfTextArea, status: 'editing' }
      : file,
    ))
  }

  return (
    <S.TextArea
      autoFocus
      placeholder='Insira aqui seu texto mardown'
      value={content}
      onChange={handleTextAreaChange}
    />
  )
}
