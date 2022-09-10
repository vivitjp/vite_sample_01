import { DynastyData } from "./../config/DynastyData"
import { atom } from "recoil"
import { Dynasty } from "../types/Dynasty"

export const dynastyListState = atom<Dynasty[]>({
  key: "dynastyListState",
  default: DynastyData,
})
