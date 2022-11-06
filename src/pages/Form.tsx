import MyForm from "../Components/features/forms/MyForm"
import { Layout } from "../layout/layout"

export function Form() {
  return (
    <Layout>
      <div className="flex flex-col w-full border border-yellow-500">
        <div className="flex flex-row border">
          <MyForm />
        </div>
      </div>
    </Layout>
  )
}
