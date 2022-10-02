import { atom } from "recoil"
import { DynastyData } from "./../config/DynastyData"
import { Dynasty } from "../types/Dynasty"

export const dynastyListState = atom<Dynasty[]>({
  key: "dynastyListState",
  default: DynastyData,
})
