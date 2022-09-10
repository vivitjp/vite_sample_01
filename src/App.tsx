import { useEffect, useState } from "react"
import MyForm from "./Components/features/forms/MyForm"
import { DynastySection } from "./Components/features/section/DynastySection"
import History from "./Components/features/section/History"

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
        <MyForm />
      </div>

      <History />
      <DynastySection />
    </div>
  )
}

export default App
