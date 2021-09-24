import styled from 'styled-components/macro'

type FileItemProps = {
  status: string
  active: boolean
}

export const FileItem = styled.li<FileItemProps>`
  display: flex;
  align-items: center;
  padding: 9px 14px 7px;
  border-radius: 6px;
  background-color: ${props => props.active && props.theme.colors.lightBlack};
  flex-grow: 1;
  flex-basis: 500px;

  & + & {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightBlack};

    path {
      stroke-opacity: 1;
    }
  }

  svg {
    flex-shrink: 0;
  }

  path {
    stroke: ${props => props.active && props.status !== 'editing' && props.theme.colors.primary};
    stroke-opacity: ${props => props.active && 1};
  }

  @media (max-width: 580px) {
    width: 40%;
    background-color: ${props => props.theme.colors.lightBlack};

    & + & {
      margin-top: 0;
    }
  }

  @media (max-width: 468px) {
    width: 60%;
  }
`

export const Link = styled.a`
  display: inline-block;
  width: 175px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 16px;
  margin-right: auto;
  font-weight: 400;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.gray};
  text-decoration: none;

  ${FileItem}:hover & {
    color: ${props => props.theme.colors.white};
  }
`

export const ButtonDeleteFile = styled.button`
  display: none;

  ${FileItem}:hover & {
    display: block;
  }

  @media (max-width: 580px) {
    display: block;
  }
`
