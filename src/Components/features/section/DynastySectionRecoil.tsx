import { RecoilRoot } from "recoil"
import { DynastyListRecoil } from "../list/DynastyListRecoil"

export const DynastySectionRecoil = () => {
  return (
    <RecoilRoot>
      <DynastyListRecoil />
    </RecoilRoot>
  )
}
