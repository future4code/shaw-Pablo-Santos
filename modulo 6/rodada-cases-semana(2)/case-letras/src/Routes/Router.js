import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import PrevisionOfFiveDaysPage from "../pages/PrevisionOfFiveDaysPage/PrevisionOfFiveDaysPage"
import PrevisionPage from "../pages/PrevisionPage/PrevisionPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/prevision" element={<PrevisionPage />} />
                <Route path="/prevision/five-days" element={<PrevisionOfFiveDaysPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router