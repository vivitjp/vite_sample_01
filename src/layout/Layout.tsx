import React from "react"
import { Link } from "react-router-dom"

type Props = {
  children: React.ReactNode
}

type List = {
  name: string
  href: string
}

const list: List[] = [
  { name: "Index", href: "./" },
  { name: "Memo", href: "./memo" },
  { name: "Form", href: "./form" },
  { name: "SWR", href: "./SWR" },
  { name: "useRef", href: "./useref" },
  { name: "useLayoutEffect", href: "./layoutEffect" },
]

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-row w-screen p-2 m-0 h-screen">
      <div className="flex flex-col w-20 gap-2 bg-cyan-700 h-auto">
        {!!list.length &&
          list.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex p-2 py-0 text-white"
            >
              {item.name}
            </Link>
          ))}
      </div>
      <div className="flex flex-col h-auto gap-3 pl-2">{children}</div>
    </div>
  )
}
