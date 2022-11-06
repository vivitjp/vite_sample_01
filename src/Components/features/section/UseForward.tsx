import {
  ChangeEvent,
  MouseEvent,
  forwardRef,
  ReactNode,
  useRef,
  useState,
} from "react"

export const UseForward = () => {
  //Input
  const [inputVal, setInputVal] = useState<string>("Hello")
  const inputRef = useRef<HTMLInputElement>(null!)
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  //Button
  const [btnVal, setBtnVal] = useState<number>(10)
  const buttonRef = useRef<HTMLButtonElement>(null!)
  const handleButton = (e: MouseEvent<HTMLButtonElement>) => {
    setBtnVal((prev) => prev * 2)
  }

  return (
    <div className="flex flex-col border p-2 gap-3 border-amber-400">
      <div>InputValue: {inputVal}</div>
      <MyInput ref={inputRef} value={inputVal} onChange={handleInput} />
      <div>ButtonValue: {btnVal}</div>
      <MyButton ref={buttonRef} type={"button"} onClick={handleButton}>
        Multi
      </MyButton>
    </div>
  )
}

//Props By ユーティリティ
type InputProps = JSX.IntrinsicElements["input"]

const MyInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input type="text" {...props} ref={ref} className="flex border p-2" />
})

//Props By カスタム
interface ButtonProps {
  children?: ReactNode
  type: "submit" | "button"
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const MyButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
  <button
    ref={ref}
    type={props.type}
    onClick={props.onClick}
    className="flex border p-2"
  >
    {props.children}
  </button>
))
