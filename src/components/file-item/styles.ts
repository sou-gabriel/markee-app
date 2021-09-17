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

  & + & {
    margin-top: 16px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.lightBlack};

    path {
      stroke-opacity: 1;
    }
  }

  path {
    stroke: ${props => props.active && props.status !== 'editing' && props.theme.colors.primary};
    stroke-opacity: ${props => props.active && 1};
  }
`

export const Link = styled.a`
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
`
