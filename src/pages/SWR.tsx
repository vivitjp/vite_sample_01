import { PeopleListSWR } from "../Components/features/People/PeopleListSWR"
import { Layout } from "../layout/layout"

export function SWR() {
  return (
    <Layout>
      <div className="flex flex-col w-full border border-yellow-500">
        {/* ■ Local Json Server */}
        <PeopleListSWR />
      </div>
    </Layout>
  )
}
