import React, { createContext, useState, useContext } from "react"
import { HistoryData } from "../config/HistoryData"

//Context
type DataContextType = {
  historyMap: Map<number, HistoryData>
  setHistoryMap: (data: Map<number, HistoryData>) => void
}

const DataContext = createContext<DataContextType>({} as DataContextType)

export const useDataContext = () => {
  return useContext(DataContext)
}

//Provider
type Props = {
  children: React.ReactNode
}
export const DataProvider = ({ children }: Props) => {
  const [historyMap, setHistoryMap] = useState<Map<number, HistoryData>>(
    new Map(Array.from(HistoryData.map((n) => [n.Id, n])))
  )

  return (
    <DataContext.Provider
      value={{
        historyMap,
        setHistoryMap,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
