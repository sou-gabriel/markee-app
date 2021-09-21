import { StatusType } from './status'

export type FileType = {
  id: string
  name: string
  content: string
  active: boolean
  status: StatusType
}
