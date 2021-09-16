import * as S from './app-styles'

export function App () {
  return (
    <>
      <S.Title>
        App {' '}
        <S.Span>Texto do span</S.Span> {' '}
        <S.SpanStyled>Texto itálico</S.SpanStyled> {' '}
      </S.Title>
    </>
  )
}
