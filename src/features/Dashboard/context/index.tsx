import { createContext } from 'react'
import { DataInterface } from '../protocols'


interface DashboardProps{
  user: DataInterface
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardContext = createContext({} as DashboardProps)


export default DashboardContext
