import { useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { dynastyListState } from "../../../atoms/dynasty"
import { Dynasty } from "../../../types/Dynasty"
import { DynastyForm } from "../forms/DynastyForm"

export const DynastyListRecoil = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [dynastyList] = useRecoilState(dynastyListState)
  const [selItem, setSelItem] = useState<Dynasty>(null!)

  const editTodo = (id: number) => {
    const item = dynastyList.find((n) => n.id === id)
    setIsOpened(!!item)
    if (item) setSelItem(item)
  }

  return (
    <div className="flex flex-row gap-2 justify-between">
      <div className="flex flex-col items-start w-1/2 p-3 gap-2 border border-orange-300">
        {dynastyList.map((item) => (
          <div
            key={item.id}
            className="flex flex-row justify-between items-center p-2 border border-gray-400 w-full"
          >
            <div className="flex justify-start items-center p-2">
              {item.name}: {item.year}
            </div>
            <button
              className="flex justify-center items-center p-2 border border-gray-400 bg-slate-300 rounded-sm"
              onClick={() => {
                editTodo(item.id)
              }}
            >
              編集
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start w-1/2 p-3 gap-2 border border-orange-300">
        {/* {isOpened && <DynastyForm {...selItem} setter={setIsOpened} />} */}
        {isOpened && <DynastyForm />}
      </div>
    </div>
  )
}
