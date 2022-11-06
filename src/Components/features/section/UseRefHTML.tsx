import { useState, useRef, useEffect, ChangeEvent } from "react"

export function UseRefHTML() {
  //DIVサイズ取得->表示
  const [size, setSize] = useState<number>(0)
  const divRefWidth = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    setSize(divRefWidth.current.clientWidth)
  }, [])

  //HTML色設定
  const setColor = (color: string = "red") => {
    divRefWidth.current.style.color = color
  }

  //フォーカス
  const btnRef = useRef<HTMLInputElement>(null!)
  const handle = () => {
    btnRef.current.focus()
  }

  //INPUT値取得->設定
  const divRefValue = useRef<HTMLDivElement>(null!)
  const change = (e: ChangeEvent<HTMLInputElement>) => {
    divRefValue.current.innerHTML = e.currentTarget.value
  }

  return (
    <>
      <div className="flex flex-row border p-2 gap-3 border-amber-400">
        <div
          ref={divRefWidth}
          className="flex border p-2 justify-center items-center"
        >
          div size: {size}
        </div>

        <button
          className="flex border p-2 justify-center items-center"
          onClick={(e) => setColor("red")}
        >
          赤
        </button>
        <button
          className="flex border p-2 justify-center items-center"
          onClick={(e) => setColor("blue")}
        >
          青
        </button>
      </div>
      <div className="flex flex-row border p-2 gap-3 border-amber-400">
        <button className="w-30 border m-1" onClick={handle}>
          Focus!
        </button>
        <input
          type="text"
          className="w-50 border m-1 p-2"
          ref={btnRef}
          onChange={change}
        />
        <div className="w-50 border m-1 p-2" ref={divRefValue} />
      </div>
    </>
  )
}
