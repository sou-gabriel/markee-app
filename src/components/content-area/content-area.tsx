import { Ref, ChangeEvent } from 'react'

import { ReactComponent as TextFileIcon } from 'resources/assets/images/file-text-blue.svg'
import { ReactComponent as FileNotFoundIcon } from 'resources/assets/images/file-not-found.svg'
import { FileType } from 'resources/types/file'

import marked from 'marked'
import 'highlight.js/styles/github.css'

import * as S from './styles'

import('highlight.js').then(hljs => {
  const highlight = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && highlight.getLanguage(language)) {
        return highlight.highlight(code, { language }).value
      }

      return highlight.highlightAuto(code).value
    },
  })
})

type ContentAreaProps = {
  inputRef: Ref<HTMLInputElement>
  fileActive: FileType | undefined
  onFilenameChange: (event: ChangeEvent<HTMLInputElement>) => void
  onTextAreaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export function ContentArea (props: ContentAreaProps) {
  const { inputRef, fileActive, onFilenameChange, onTextAreaChange } = props

  if (!fileActive) {
    return (
      <S.ContainerErrorMessage>
        <S.ErrorMessageParagraph>
          <FileNotFoundIcon />
          Nenhum arquivo encontrado
        </S.ErrorMessageParagraph>
      </S.ContainerErrorMessage>
    )
  }

  return (
    <S.Container>
      <S.Top>
        <TextFileIcon />
        <S.InputFilename
          type='text'
          autoFocus
          placeholder='Nome do arquivo'
          ref={inputRef}
          value={fileActive?.name || ''}
          onChange={onFilenameChange}
        />
      </S.Top>

      <S.Left>
        <S.TextArea
          placeholder='Insira aqui seu texto markdown'
          value={fileActive?.content || ''}
          onChange={onTextAreaChange}
        />
      </S.Left>

      <S.Right>
        <S.Output
          dangerouslySetInnerHTML={{ __html: marked(fileActive?.content || '') }}
        />
      </S.Right>
    </S.Container>
  )
}
