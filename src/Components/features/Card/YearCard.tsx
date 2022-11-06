import { FC, memo } from "react"
import { Year } from "../../../types/Year"

export const YearCard: FC<Year> = memo(({ year, event }) => {
  return (
    <div className="flex flex-col border p-4">
      <div className="flex border p-3 justify-center align-middle">{year}</div>
      <div className="flex border p-3 justify-center align-middle">{event}</div>
    </div>
  )
})
