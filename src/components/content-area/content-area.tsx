import { useState, Ref } from 'react'

import { InputFilename } from 'components/input-filename'
import { TextArea } from 'components/text-area'
import { TextOutput } from 'components/text-output'

import { ReactComponent as TextFileIcon } from 'resources/assets/images/file-text-blue.svg'

import { FileType } from 'resources/types/file'

import * as S from './styles'

type ContentAreaProps = {
  inputRef: Ref<HTMLInputElement>
  file?: FileType
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function ContentArea (props: ContentAreaProps) {
  const [content, setContent] = useState('')

  return (
    <S.Container>
      <S.Top>
        <TextFileIcon />
        <InputFilename inputRef={props.inputRef} />
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
