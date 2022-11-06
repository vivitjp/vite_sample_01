import HistoryCard from "../Card/HistoryCard"
import { useDataContext } from "../../../context/DataProvider"

export const HistoryContext = (): JSX.Element => {
  const { historyMap } = useDataContext()

  return (
    <div className="flex flex-row border">
      {Array.from(historyMap.values()).map((n) => (
        <HistoryCard
          key={n.Id}
          Id={n.Id}
          name={n.name}
          yearBirth={n.yearBirth}
        />
      ))}
    </div>
  )
}
