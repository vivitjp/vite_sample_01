import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contexts } from "./pages/Contexts"
import { Form } from "./pages/Form"
import { LayoutEffectPage } from "./pages/LayoutPage"
import { PageMemo } from "./pages/PageMemo"
import { SWR } from "./pages/SWR"
import { UseRef } from "./pages/UseRef"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Contexts />} />
          <Route path="/memo" element={<PageMemo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/SWR" element={<SWR />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/layoutEffect" element={<LayoutEffectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
