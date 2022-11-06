import { useRef, useState } from "react"

export function UseRefVariables() {
  const [count, setCount] = useState(0) //値を維持
  const aRef = useRef<number>(0) //値を維持
  let aVal = 0 //毎回初期化

  const handleRef = () => {
    aRef.current++ //加算値維持(非リアクティブ)
  }

  const handleLet = () => {
    aVal++ //加算後初期化->永遠に0
  }

  const handleState = () => {
    setCount((p) => {
      return p + 1 //加算state維持(リアクティブ)
    })
  }

  return (
    <div className="flex flex-col border p-2 gap-3 border-amber-400">
      <div className="flex flex-row border p-2 gap-3 justify-between">
        <div>Ref: {aRef.current}</div>
        <button
          className="flex border p-2 justify-center items-center"
          onClick={handleRef}
        >
          Up
        </button>
        <div>非リアクティブ(変化では再描画されず)</div>
      </div>

      <div className="flex flex-row border p-2 gap-3 justify-between">
        <div>let: {aVal}</div>
        <button
          className="flex border p-2 justify-center items-center"
          onClick={handleLet}
        >
          Up
        </button>
        <div>再描写の度に0</div>
      </div>

      <div className="flex flex-row border p-2 gap-3 justify-between">
        <div>useState: {count}</div>
        <button
          className="flex border p-2 justify-center items-center"
          onClick={handleState}
        >
          Up
        </button>
        <div>リアクティブ(変化で再描画)</div>
      </div>
    </div>
  )
}
