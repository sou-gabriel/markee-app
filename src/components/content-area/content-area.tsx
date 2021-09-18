import { useState, Ref } from 'react'

import { Filename } from 'components/filename'
import { TextArea } from 'components/text-area'
import { TextOutput } from 'components/text-output'

import { ReactComponent as TextFileIcon } from 'assets/images/file-text-blue.svg'

import * as S from './styles'

type MainContentProps = {
  inputRef: Ref<HTMLInputElement>
}

export function MainContent (props: MainContentProps) {
  const [content, setContent] = useState('')

  return (
    <S.Container>
      <S.Top>
        <TextFileIcon />
        <Filename inputRef={props.inputRef} />
      </S.Top>

      <S.Left>
        <TextArea content={content} setContent={setContent} />
      </S.Left>

      <S.Right>
        <TextOutput content={content} />
      </S.Right>
    </S.Container>
  )
}
