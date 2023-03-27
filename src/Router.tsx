import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { Resume } from "./pages/Resume";
import { SharingSpace } from "./pages/SharingSpace";
import { TravelComplete } from "./pages/TravelComplete";
import { TravelTest } from "./pages/TravelTest";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/travel/main" element={<Main />} />
      <Route path="/travel/test" element={<TravelTest />} />
      <Route path="/travel/complete" element={<TravelComplete />} />
      <Route path="/space" element={<SharingSpace />}></Route>
    </Routes>
  )
}