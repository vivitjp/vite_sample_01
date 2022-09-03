import React, { FC, memo } from "react"

type CardA = {
  name: string
  value: number
}

const CardA: FC<CardA> = memo(({ name, value }): JSX.Element => {
  return (
    <div className="flex flex-col border p-4">
      <div className="flex border p-3 justify-center align-middle">{name}</div>
      <div className="flex border p-3 justify-end align-middle">{value}</div>
    </div>
  )
})

export default CardA
