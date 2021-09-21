import { useRef } from 'react'
import { Sidebar } from 'components/sidebar'
import { ContentArea } from 'components/content-area'

import * as S from './styles/app-styles'

import { FileType } from 'resources/types/file'
import { StatusType } from 'resources/types/status'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileType[]>([])

  useEffect(() => {
    const fileActive = files.find(file => file.active)
    const isTheFileBeingEdited = fileActive && fileActive.status === 'editing'

    let externalTimerId: ReturnType<typeof setTimeout>

    const createStatusUpdateFunction = (status: StatusType) => {
      return (files: FileType[]) => files.map<FileType>(file => {
        return file.active ? { ...file, status } : file
      })
    }

    if (isTheFileBeingEdited) {
      const changeFileStatus = () => {
        externalTimerId = setTimeout(() => {
          const updateStatusForSaving = createStatusUpdateFunction('saving')
          setFiles(updateStatusForSaving)

          const internalTimerId = setTimeout(() => {
            const updateStatusForSaved = createStatusUpdateFunction('saved')
            setFiles(updateStatusForSaved)

            clearTimeout(internalTimerId)
          }, 300)
        }, 300)
      }

      changeFileStatus()
    }

    return () => clearTimeout(externalTimerId)
  }, [files])

  return (
    <S.Container>
      <Sidebar
        inputRef={inputRef}
        files={files}
        setFiles={setFiles}
      />
      <ContentArea
        inputRef={inputRef}
        file={files.find(file => file.active)}
        setFiles={setFiles}
      />
    </S.Container>
  )
}
