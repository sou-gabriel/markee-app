import { useState } from 'react'

import { Filename } from 'components/filename'
import { TextArea } from 'components/text-area'
import { TextOutput } from 'components/text-output'

import { ReactComponent as TextFileIcon } from 'assets/images/file-text-blue.svg'

import * as S from './styles'

export function MainContent () {
  const [content, setContent] = useState('')

  return (
    <S.Container>
      <S.Top>
        <TextFileIcon />
        <Filename />
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
