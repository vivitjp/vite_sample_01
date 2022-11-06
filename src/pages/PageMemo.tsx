import { useState, memo, useRef } from "react"
import { Layout } from "../layout/layout"

type Props = {
  value: number
}

//外部コンポーネント
const Compo = ({ value }: Props) => (
  <div className="flex border justify-center items-center p-3">Non {value}</div>
)
const CompoMemo = memo(({ value }: Props) => (
  <div className="flex border justify-center items-center p-3">
    Memo {value}
  </div>
))

const CompoMemoCompareBase = ({ value }: Props) => (
  <div className="flex border justify-center items-center p-3">
    MemoCompare {value}
  </div>
)

const areEqual = (prevProps: Props, nextProps: Props) => {
  return nextProps !== prevProps
}

const CompoMemoCompare = memo(CompoMemoCompareBase, areEqual)

export const PageMemo = () => {
  const memoValue = useRef(1)
  const [count, setCount] = useState(0)

  const handleCountUp = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <Layout>
      <div className="flex flex-col border p-2 gap-3">
        <Compo value={memoValue.current} />
        <CompoMemo value={memoValue.current} />
        <CompoMemoCompare value={memoValue.current} />
        <div className="flex flex-row border justify-center items-stretch gap-2 p-3">
          <div className="flex justify-center items-center p-3">{count}</div>
          <button
            onClick={handleCountUp}
            className="flex border justify-center items-center p-3"
          >
            Up
          </button>
        </div>
      </div>
    </Layout>
  )
}
