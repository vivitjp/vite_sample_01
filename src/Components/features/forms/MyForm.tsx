import React, { memo } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  name: string
  value: string
}

const MyForm = memo(() => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-row border gap-2 p-2"
    >
      <input defaultValue="Taro" {...register("name")} className="border p-2" />
      <input
        {...register("value", { required: true })}
        className="border p-2"
      />
      {errors.value && (
        <span className="text-orange-700">This field is required</span>
      )}
      <input type="submit" className="border p-2" />
    </form>
  )
})

export default MyForm
