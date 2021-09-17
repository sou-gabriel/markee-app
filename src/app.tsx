import { Sidebar } from 'components/sidebar'
import { MainContent } from 'components/content-area'

import * as S from './styles/app-styles'

export function App () {
  return (
    <S.Container>
      <Sidebar />
      <MainContent />
    </S.Container>
  )
}
