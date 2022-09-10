export type HistoryData = {
  Id: number
  name: string
  yearBirth: number
}

export const HistoryData: HistoryData[] = [
  {
    Id: 1,
    name: "小早川隆景",
    yearBirth: 1533,
  },
  {
    Id: 2,
    name: "足利義昭",
    yearBirth: 1537,
  },
  {
    Id: 3,
    name: "黒田官兵衛",
    yearBirth: 1546,
  },
  {
    Id: 4,
    name: "斎藤道三",
    yearBirth: 1494,
  },
  {
    Id: 5,
    name: "織田信長",
    yearBirth: 1534,
  },
]

// export const HistoryMap: Map<number, HistoryData> = new Map(
//   Array.from(HistoryData.map((n) => [n.Id, n]))
// )
