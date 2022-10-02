import React from "react"
import { useRecoilState } from "recoil"
import { dynastyListState } from "../../../atoms/dynasty"
import { useForm } from "react-hook-form"
import { Dynasty } from "../../../types/Dynasty"

type Functional = {
  setter: React.Dispatch<React.SetStateAction<boolean>>
}

export const DynastyFormRHF: React.FC<Dynasty & Functional> = (props) => {
  //const setDynastyList = useSetRecoilState(dynastyListState)
  //setDynastyList((n) => ({ ...n, data }))
  const [dynastyList, setDynastyList] = useRecoilState(dynastyListState)
  const { setter, ...params } = props

  // react-hook-formを設定
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Dynasty>({
    mode: "onChange",
    defaultValues: { ...props },
  })

  // 編集
  const updateDynasty = (data: Dynasty) => {
    const newList: Dynasty[] = dynastyList.map((n) => {
      if (n.id === data.id) return data
      else return n
    })
    setDynastyList(newList)
    reset()
    setter(false)
  }

  const restrictionDefault = {
    required: "必須項目です",
    maxLength: {
      value: 20,
      message: "20文字以内",
    },
  }

  type Matrix = {
    title: string
    type: string
    valueName: "name" | "year" | "id"
    restriction: {}
  }

  const dataMatrix: Matrix[] = [
    {
      title: "時代名",
      type: "text",
      valueName: "name",
      restriction: restrictionDefault,
    },
    {
      title: "西暦",
      type: "number",
      valueName: "year",
      restriction: restrictionDefault,
    },
  ]

  return (
    <form
      onSubmit={handleSubmit(updateDynasty)}
      className="flex flex-col gap-2"
    >
      {dataMatrix.map((item, idx) => (
        <React.Fragment key={idx}>
          <label className="p-2">{item.title}:</label>
          <input
            className="text-center p-2 border border-gray-300"
            type={item.type}
            {...register(item.valueName, item.restriction)}
          />
          {/* {errors.name && (
            <span className="p-2 text-red-500">{errors.name.message}</span>
          )} */}
        </React.Fragment>
      ))}
      <button type="submit" className="p-3">
        更新
      </button>
    </form>
  )
}
