import { useRef } from 'react'
import { Sidebar } from 'components/sidebar'
import { MainContent } from 'components/content-area'

import * as S from './styles/app-styles'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <S.Container>
      <Sidebar inputRef={inputRef} />
      <MainContent inputRef={inputRef} />
    </S.Container>
  )
}
