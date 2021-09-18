import { Dispatch, ChangeEvent, SetStateAction } from 'react'

import * as S from './styles'

type TextAreaProps = {
  content: string
  setContent: Dispatch<SetStateAction<string>>
}

export function TextArea (props: TextAreaProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    props.setContent(event.target.value)
  }

  return <S.TextArea autoFocus value={props.content} onChange={handleChange} />
}
