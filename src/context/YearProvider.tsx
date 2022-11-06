import { createContext } from "react"
import { YearData } from "../config/YearData"
import { Year } from "../types/Year"

export const YearContext = createContext<Year[]>([])

type Props = {
  children: React.ReactNode
}
export const YearProvider = ({ children }: Props) => {
  return (
    <YearContext.Provider value={YearData}>{children}</YearContext.Provider>
  )
}
