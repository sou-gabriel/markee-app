import { Sidebar } from 'components/sidebar'
import { ContentArea } from 'components/content-area'

import { useFiles } from 'resources/hooks/useFiles'

import * as S from './styles/app-styles'

export function App () {
  const {
    inputRef,
    files,
    handleCreateNewFile,
    handleChangeFile,
    handleDeleteFile,
    handleFilenameChange,
    handleTextAreaChange,
  } = useFiles()

  return (
    <S.Container>
      <Sidebar
        files={files}
        onCreateNewFile={handleCreateNewFile}
        onChangeFile={handleChangeFile}
        onDeleteFile={handleDeleteFile}
      />
      <ContentArea
        inputRef={inputRef}
        fileActive={files.find(file => file.active)}
        onFilenameChange={handleFilenameChange}
        onTextAreaChange={handleTextAreaChange}
      />
    </S.Container>
  )
}
