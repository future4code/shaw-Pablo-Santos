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
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<AplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailPage />} />
            </Routes>
        </BrowserRouter>


    )
}