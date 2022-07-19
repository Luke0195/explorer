import { createContext } from 'react'
import { DataInterface } from '../protocols'


interface DashboardProps{
  user: DataInterface
}

const DashboardContext = createContext({} as DashboardProps)


export default DashboardContext
