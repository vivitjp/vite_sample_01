import React, { useReducer } from "react"
import { countReducerLazy, init } from "../../../reducer/countReducerLazy"

type Props = {
  initCount: number
}

export function CounterSectionReducerLazy({ initCount }: Props) {
  const [state, dispatch] = useReducer(countReducerLazy, initCount, init)

  return (
    <div className="flex flex-row border p-2 gap-3">
      Count: {state.count}
      <button
        className="flex flex-row border justify-center items-center p-3"
        onClick={() => dispatch({ type: "inc" })}
      >
        +
      </button>
      <button
        className="flex flex-row border justify-center items-center p-3"
        onClick={() => dispatch({ type: "reset", payload: initCount })}
      >
        reset
      </button>
    </div>
  )
}
