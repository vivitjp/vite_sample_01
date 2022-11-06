type Store = { count: number }
type ActionType = { type: "inc" } | { type: "reset"; payload: number }

export const init = (initNumber: number) => ({ count: initNumber })

export const countReducerLazy = (state: Store, action: ActionType) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 }
    case "reset":
      return init(action.payload)
    default:
      throw new Error()
  }
}
