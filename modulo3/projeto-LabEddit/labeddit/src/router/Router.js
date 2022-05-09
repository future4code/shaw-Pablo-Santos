import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/Postpage"
import SignupPage from "../pages/SignupPage/SignupPage" 
import ErroPage from "../pages/Erro/ErroPage"


const Router=()=>{


return(
    <BrowserRouter>
    <Routes>
        <Route index element={<FeedPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/post" element={<PostPage />}/>
        <Route path="*" element={<ErroPage />}/>
    </Routes>
    </BrowserRouter>

)

}

export default Router