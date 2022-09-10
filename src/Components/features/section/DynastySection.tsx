import { RecoilRoot } from "recoil"
import { DynastyList } from "../list/DynastyList"

export const DynastySection = () => {
  return (
    <RecoilRoot>
      <DynastyList />
    </RecoilRoot>
  )
}
