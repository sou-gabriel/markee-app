import { Ref } from 'react'

import * as S from './styles'

type InputFilenameProps = {
  inputRef: Ref<HTMLInputElement>
}

export function InputFilename (props: InputFilenameProps) {
  return <S.Input type='text' placeholder='Nome do arquivo' ref={props.inputRef} />
}
