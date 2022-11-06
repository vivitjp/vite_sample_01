import { useEffect, useState } from "react"
import MyForm from "../Components/features/forms/MyForm"
import { PeopleListSWR } from "../Components/features/People/PeopleListSWR"
import { CounterSectionReducer } from "../Components/features/section/CounterSectionReducer"
import { CounterSectionReducerLazy } from "../Components/features/section/CounterSectionReducerLazy"
import { DynastySectionRecoil } from "../Components/features/section/DynastySectionRecoil"
import { HistoryContext } from "../Components/features/section/HistoryContext"
import { YearSection } from "../Components/features/section/YearSection"
import { DataProvider } from "../context/DataProvider"
import { YearProvider } from "../context/YearProvider"
import { Layout } from "../layout/layout"

export function Contexts() {
  return (
    <Layout>
      <div className="flex flex-col w-full border border-yellow-500">
        <CounterSectionReducer />
        <CounterSectionReducerLazy initCount={10} />

        {/* ■ Context */}
        <DataProvider>
          <HistoryContext />
        </DataProvider>

        {/* ■ Context */}
        <YearProvider>
          <YearSection />
        </YearProvider>

        {/* ■ Recoil */}
        <DynastySectionRecoil />

        {/* ■ Local Json Server */}
        {/* <PeopleListSWR /> */}
      </div>
    </Layout>
  )
}
