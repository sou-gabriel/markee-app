import { Ref, Dispatch, SetStateAction } from 'react'

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

export function ContentArea ({ inputRef, file, setFiles }: ContentAreaProps) {
  return (
    <S.Container>
      <S.Top>
        <TextFileIcon />
        <InputFilename
          inputRef={inputRef}
          name={file?.name}
          setFiles={setFiles}
        />
      </S.Top>

      <S.Left>
        <TextArea content={file?.content} setFiles={setFiles} />
      </S.Left>

      <S.Right>
        <TextOutput content={file?.content} />
      </S.Right>
    </S.Container>
  )
}
