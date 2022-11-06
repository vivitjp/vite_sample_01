import { UseForward } from "../Components/features/section/UseForward"
import { UseRefHTML } from "../Components/features/section/UseRefHTML"
import { UseRefVariables } from "../Components/features/section/UseRefVariables"
import { Layout } from "../layout/layout"

export function UseRef() {
  return (
    <Layout>
      <UseRefVariables />
      <UseRefHTML />
      <UseForward />
    </Layout>
  )
}
