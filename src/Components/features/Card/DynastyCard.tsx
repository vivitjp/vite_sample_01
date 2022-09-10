import { useSetRecoilState } from "recoil"
import { dynastyListState } from "../../../atoms/dynasty"
import { useForm } from "react-hook-form"

type FormData = {
  id: number
  name: string
  year: number
}

export const DynastyCard: React.FC = () => {
  const setDynastyList = useSetRecoilState(dynastyListState)

  // react-hook-formを設定
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      id: Math.floor(Math.random() * 1000),
      name: "N/A",
      year: 0,
    },
  })

  // Dynastyを追加
  const addDynasty = (data: FormData) => {
    setDynastyList((n) => ({ ...n, data }))
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(addDynasty)}>
        <label>Name:</label>
        {/* 入力要素とvalidationを設定 */}
        <input
          type="text"
          {...register("name", {
            required: "必須項目です",
            maxLength: {
              value: 20,
              message: "20文字以内",
            },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
        <br />
        <label>text:</label>
        {/* 入力要素とvalidationを設定 */}
        <input
          type="number"
          {...register("year", {
            required: "必須項目です",
            maxLength: {
              value: 20,
              message: "20文字以内で入力してください",
            },
          })}
        />
        {errors.year && (
          <span className="error.main">{errors.year.message}</span>
        )}
        <br />
        <button type="submit">追加</button>
      </form>
    </div>
  )
}
