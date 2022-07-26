import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Pages/login/login'
import SignUp from '../Pages/SignUp/signUp'
import SignUpAdress from '../Pages/SignUpAdress/signUpAdress'
import Feed from '../Pages/Feed/feed'
import Restaurant from '../Pages/Restaurant/restaurant'
import Profile from '../Pages/Profile/profile'
import Cart from '../Pages/Cart/cart'
import ProfileEdit from '../Pages/ProfileEdit/ProfileEdit'
import AdressEdit from '../Pages/AdressEdit/AdressEdit'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path ='/'element={<Feed/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/signUp/adress' element={<SignUpAdress/>}/>
                <Route path='/adress/:id' element={<AdressEdit/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/feed/:restaurantId' element={<Restaurant/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='profile/:id' element={<ProfileEdit/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router