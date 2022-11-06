type Store = { count: number }
type ActionType = { type: "inc" } | { type: "dec" }

export const countReducer = (state: Store, action: ActionType) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 }
    case "dec":
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}
