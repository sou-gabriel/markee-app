import { Ref } from 'react'

import * as S from './styles'

type FilenameProps = {
  inputRef: Ref<HTMLInputElement>
}

export function Filename (props: FilenameProps) {
  return <S.Input type='text' placeholder='Nome do arquivo' ref={props.inputRef} />
}
