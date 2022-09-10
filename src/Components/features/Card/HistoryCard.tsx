import React, { FC, memo, useRef } from "react"
import { HistoryData } from "../../../config/HistoryData"
import { useDataContext } from "../../../context/DataProvider"
import { ButtonRef } from "../../parts/ButtonRef"

const HistoryCard: FC<HistoryData> = memo(
  ({ Id, name, yearBirth }): JSX.Element => {
    const ref = useRef<HTMLButtonElement>(null!)

    const { historyMap, setHistoryMap } = useDataContext()

    const handler = () => {
      const newMap = new Map(historyMap)
      const obj = newMap.get(Id)
      if (obj) {
        obj.name = "新沼謙治"
        newMap.set(Id, obj)
        setHistoryMap(newMap)
      }
    }

    return (
      <div className="flex flex-col border p-4">
        <div className="flex border p-3 justify-center align-middle">
          {name}
        </div>
        <div className="flex border p-3 justify-center align-middle">
          {yearBirth}
        </div>
        <div className="flex border p-3 justify-center align-middle">
          <ButtonRef ref={ref} customClass={"text-red-500"} onClick={handler}>
            Change
          </ButtonRef>
        </div>
      </div>
    )
  }
)

export default HistoryCard
