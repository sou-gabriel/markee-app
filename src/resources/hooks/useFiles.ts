import { useState, useRef, useEffect, MouseEvent, ChangeEvent } from 'react'

import { v4 as uuid } from 'uuid'

import { FileType } from 'resources/types/file'
import { StatusType } from 'resources/types/status'

import localforage from 'localforage'

export const useFiles = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<FileType[]>([])

  useEffect(() => {
    localforage.setItem('files', files)
  }, [files])

  useEffect(() => {
    const showFilesFromLocalForage = async () => {
      const files = await localforage.getItem<FileType[] | null>('files')
      const isLocalforageEmpty = files === null

      if (isLocalforageEmpty) {
        const initialFile: FileType = {
          id: uuid(),
          name: 'Sem título',
          content: '',
          active: true,
          status: 'saved',
        }

        setFiles([initialFile])
        window.history.pushState(null, '', `/file/${initialFile.id}`)

        return
      }

      setFiles(files)
    }

    showFilesFromLocalForage()
  }, [])

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

  const handleCreateNewFile = () => {
    inputRef.current?.focus()

    const inactiveFiles = files.map<FileType>(file => ({
      ...file,
      active: false,
    }))

    const newFile: FileType = {
      id: uuid(),
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    }

    setFiles([...inactiveFiles, newFile])
    window.history.pushState(null, '', `/file/${newFile.id}`)
  }

  const handleChangeFile = (clickedFile: FileType) => {
    return (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      inputRef.current?.focus()

      window.history.pushState(null, '', `/file/${clickedFile.id}`)

      setFiles(prevFiles => {
        return prevFiles.map<FileType>(file => file.id === clickedFile.id
          ? { ...file, active: true }
          : { ...file, active: false, status: 'saved' },
        )
      })
    }
  }

  const handleDeleteFile = (clickedFile: FileType) => () => {
    inputRef.current?.focus()
    setFiles(prevFiles => prevFiles.filter(file => file.id !== clickedFile.id))
  }

  const handleFilenameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedFilename = event.target.value

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.active
      ? { ...file, name: updatedFilename, status: 'editing' }
      : file,
    ))
  }

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const updatedValueOfTextArea = event?.target.value

    setFiles(prevFiles => prevFiles.map<FileType>(file => file.active
      ? { ...file, content: updatedValueOfTextArea, status: 'editing' }
      : file,
    ))
  }

  return {
    inputRef,
    files,
    handleCreateNewFile,
    handleChangeFile,
    handleDeleteFile,
    handleFilenameChange,
    handleTextAreaChange,
  }
}
