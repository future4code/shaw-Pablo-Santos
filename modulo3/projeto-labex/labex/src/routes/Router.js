import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {AdminHomePage}  from '../pages/AdminHomePage'
import {CreateTripPage} from '../pages/CreateTripPage'
import {HomePage}  from '../pages/HomePage'
import {ListTripsPage}  from '../pages/ListTripsPage'
import  {LoginPage }from '../pages/LoginPage'
import {TripDetailPage} from '../pages/TripDetailsPage'
import  {AplicationFormPage}  from '../pages/AplicationFormPage'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/listTripsPage" element={<ListTripsPage />} />
                <Route path="/tripDetaisPage" element={<TripDetailPage />} />
                <Route path="/aplicationFormPage" element={<AplicationFormPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/adminHomePage" element={<AdminHomePage />} />
                <Route path="/createTripPage" element={<CreateTripPage />} />
            </Routes>
        </BrowserRouter>


    )
}