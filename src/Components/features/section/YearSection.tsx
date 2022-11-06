import { useContext } from "react"
import { YearContext } from "../../../context/YearProvider"
import { YearCard } from "../Card/YearCard"

export const YearSection = () => {
  const YearData = useContext(YearContext)

  return (
    <div className="flex flex-row border">
      {!!YearData.length &&
        YearData.map((n) => (
          <YearCard key={n.year} year={n.year} event={n.event} />
        ))}
    </div>
  )
}
