import { NavLink, Routes, Route } from "react-router-dom";

import './css/App.css'
import GenerationPage from "./pages/GenerationPage.tsx";
import ChargingPage from "./pages/ChargingPage.tsx";

function App() {
  return (
    <>
      <h1>Energy Mix</h1>
        <nav>
            <NavLink to="/generation" className={({isActive }) => isActive ? "tab active" : "tab"} >
                Show generation energy mix</NavLink>
            <NavLink to="/charging" className={({isActive }) => isActive ? "tab active" : "tab"}>
                Show the best charging window</NavLink>
        </nav>
        <div>
            <Routes>
                <Route path="/generation" element={<GenerationPage/>}></Route>
                <Route path="/charging" element={<ChargingPage/>}></Route>
            </Routes>
        </div>

    </>
  )
}

export default App
