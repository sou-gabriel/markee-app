import { Ref, Dispatch, SetStateAction, ChangeEvent } from 'react'

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
  files: FileType[]
  setFiles: Dispatch<SetStateAction<FileType[]>>
}

export function ContentArea ({ inputRef, files, setFiles }: ContentAreaProps) {
  const fileActive: FileType | undefined = files.find(file => file.active)

  const handleFilenameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedFilename = event.target.value

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.active
      ? { ...file, name: updatedFilename, status: 'editing' }
      : file,
    ))
  }

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedValueOfTextArea = event?.target.value

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.active
      ? { ...file, content: updatedValueOfTextArea, status: 'editing' }
      : file,
    ))
  }

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
          onChange={handleFilenameChange}
        />
      </S.Top>

      <S.Left>
        <S.TextArea
          placeholder='Insira aqui seu texto markdown'
          value={fileActive?.content || ''}
          onChange={handleTextAreaChange}
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
