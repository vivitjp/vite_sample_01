import React, { createContext, useState, useContext } from "react"
import { HistoryData } from "../config/HistoryData"

type DataContextType = {
  historyMap: Map<number, HistoryData>
  setHistoryMap: (data: Map<number, HistoryData>) => void
}

const DataContext = createContext<DataContextType>({} as DataContextType)

type Props = {
  children: React.ReactNode
}

//必要に応じて次のHooksを使い、要素を取得
export const useDataContext = () => {
  return useContext(DataContext)
}

//App.tsxで使用する store
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
