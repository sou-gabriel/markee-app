import styled from 'styled-components/macro'

export const Container = styled.main`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content auto;
  grid-template-areas: 
    "filenameContainer filenameContainer"
    "textAreaContainer textOutputContainer"
  ;
  row-gap: 41px;
  padding: 24px 240px 42px 24px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  grid-area: filenameContainer;
`

export const Left = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 32px;
  grid-area: textAreaContainer;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 100%;
    margin: 5px 0;
    background-color: ${props => props.theme.colors.black};
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    opacity: 12%;
    border-radius: 999px;
  }
`

export const Right = styled.div`
  padding-left: 32px;
  grid-area: textOutputContainer;
`

export const InputFilename = styled.input`
  width: 100%;
  height: 23px;
  margin-left: 12px;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.344rem;
  letter-spacing: -2%;
  color: ${props => props.theme.colors.black};
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: 'Inconsolata', sans-serif;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1.888rem;
  color: ${props => props.theme.colors.black};
  resize: none;
`

export const Output = styled.output`
  font-size: 1.8rem;
  line-height: 2.344rem;
  color: ${props => props.theme.colors.black};

  > * {
    margin-top: 0;
  }
`
