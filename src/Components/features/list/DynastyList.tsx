import { useRecoilState, useSetRecoilState } from "recoil"
import { dynastyListState } from "../../../atoms/dynasty"

export const DynastyList = () => {
  const [dynastyList, setDynastyList] = useRecoilState(dynastyListState)

  // 完了したTodoを削除
  // const deleteTodo = (id: string) => {
  //   const target = todoList.filter((todo) => {
  //     return todo.id != id
  //   })
  //   setTodoList(target)
  // }

  return (
    <div>
      {dynastyList.map((item) => (
        <div key={item.Id}>
          時代名:{item.name} <br />
          年:{item.year} <br />
          {/* <button
            onClick={() => {
              deleteTodo(item.id)
            }}
          >
            完了
          </button> */}
        </div>
      ))}
    </div>
  )
}
