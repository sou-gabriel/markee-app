import { Dispatch, ChangeEvent, SetStateAction } from 'react'

import { FileType } from 'resources/types/file'

import * as S from './styles'

type TextAreaProps = {
  content?: string
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function TextArea (props: TextAreaProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.setContent(event.target.value)
  }

  return <S.TextArea autoFocus value={props.content} onChange={handleChange} />
}
