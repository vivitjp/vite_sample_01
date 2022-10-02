import React, { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { dynastyListState } from "../../../atoms/dynasty"
import { Dynasty } from "../../../types/Dynasty"

export const DynastyForm = () => {
  const [value, setValue] = useState<string>("")
  const [myList, setMyList] = useRecoilState(dynastyListState)

  useEffect(() => {
    if (myList) setValue(myList[0].name)
  }, [myList])

  const handleUpdate = () => {
    const newList: Dynasty[] = JSON.parse(JSON.stringify(myList))
    newList[0].name = value
    setMyList(newList)
  }

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <button type="button" onClick={handleUpdate}>
        更新
      </button>
    </>
  )
}
