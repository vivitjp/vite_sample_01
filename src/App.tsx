import { useState } from "react"
import CardA from "./Components/features/Card/CardA"
import MyForm from "./Components/features/forms/MyForm"

type Data = {
  name: string
  value: number
}

const data: Data[] = [
  {
    name: "小早川隆景",
    value: 234,
  },
  {
    name: "足利義昭",
    value: 5432,
  },
  {
    name: "黒田官兵衛",
    value: 8367,
  },
  {
    name: "斎藤道三",
    value: 83,
  },
  {
    name: "織田信長",
    value: 275,
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col w-full border border-yellow-500">
      <div className="flex flex-row border p-3">
        <button
          className="border shadow px-5 py-2 bg-slate-200 rounded"
          onClick={() => setCount((count) => count + 1)}
        >
          Counter
        </button>
        <div className="ml-2 px-5 py-2 border">{count}</div>
      </div>
      <div className="flex flex-row border">
        {data.map((n) => (
          <CardA name={n.name} value={n.value} />
        ))}
      </div>
      <div className="flex flex-row border">
        <MyForm />
      </div>
    </div>
  )
}

export default App
