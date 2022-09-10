import React, { FC, memo } from "react"
import { HistoryData } from "../../../config/HistoryData"

const HistoryCard: FC<HistoryData> = memo(
  ({ Id, name, yearBirth }): JSX.Element => {
    return (
      <div className="flex flex-col border p-4">
        <div className="flex border p-3 justify-center align-middle">
          {name}
        </div>
        <div className="flex border p-3 justify-end align-middle">
          {yearBirth}
        </div>
      </div>
    )
  }
)

export default HistoryCard
