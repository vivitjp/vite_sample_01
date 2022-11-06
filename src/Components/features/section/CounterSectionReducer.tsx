import React, { useReducer } from "react"
import { countReducer } from "../../../reducer/countReducer"

export function CounterSectionReducer() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })
  return (
    <div className="flex flex-row border p-2 gap-3">
      Count: {state.count}
      <button
        className="flex flex-row border justify-center items-center p-3"
        onClick={() => dispatch({ type: "dec" })}
      >
        -
      </button>
      <button
        className="flex flex-row border justify-center items-center p-3"
        onClick={() => dispatch({ type: "inc" })}
      >
        +
      </button>
    </div>
  )
}
