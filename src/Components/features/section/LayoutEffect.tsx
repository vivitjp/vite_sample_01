import React, { ChangeEvent, useEffect, useLayoutEffect, useState } from "react"

const sleep = async (coef: number = 2) => {
  const sec = Math.floor(Math.random() * 1000) * coef
  await new Promise((resolve) => setTimeout(resolve, sec))
}

export const LayoutEffect = () => {
  const [text1, setText1] = useState("無表示")
  const [text2, setText2] = useState("無表示")
  const [text3, setText3] = useState("無表示")

  useEffect(() => {
    ;(async () => {
      await sleep(4)
      setText1("1表示されました!")
    })()
  }, [])

  useLayoutEffect(() => {
    ;(async () => {
      await sleep(4)
      setText2("2表示されました!")
    })()
  }, [])

  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setText3(e.currentTarget.value)
  }

  return (
    <div className="flex flex-col border p-2 gap-3 border-amber-400">
      <div className="flex flex-row border p-2 gap-3">
        <div className="flex border p-2">1:{text1}</div>
        <div className="flex border p-2">2:{text2}</div>
      </div>

      <input className="flex border p-2" onChange={handler} />
      <div className="flex border p-2">3:{text3}</div>
    </div>
  )
}
