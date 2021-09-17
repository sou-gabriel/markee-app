import { ListFiles } from 'components/list-files'

import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { ReactComponent as PlusIcon } from 'assets/images/plus-symbol.svg'

import * as S from './styles'

export function Sidebar () {
  return (
    <S.Sidebar>
      <S.PrimaryTitle>
        <Logo />
      </S.PrimaryTitle>

      <S.SecondaryTitle>
        <S.ReducedDecorativeLine />
        Arquivos
        <S.LargeDecorativeLine />
      </S.SecondaryTitle>

      <S.ButtonNewFile>
        <PlusIcon />
        Adicionar arquivo
      </S.ButtonNewFile>

      <ListFiles />
    </S.Sidebar>
  )
}
