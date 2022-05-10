import React from "react";
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/Postpage"
import SignupPage from "../pages/SignupPage/SignupPage" 
import ErroPage from "../pages/Erro/ErroPage"
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/BASE_URL";

const Router=()=>{
    

return(
    <BrowserRouter>
    <Routes>
        <Route index element={<FeedPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/post/:id" element={<PostPage />}/>
        <Route path="*" element={<ErroPage />}/>
    </Routes>
    </BrowserRouter>

)

}

export default Router