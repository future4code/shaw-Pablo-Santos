import React from "react";
import { Routes, Route} from 'react-router-dom'
import FeedPage from "../pages/FeedPage/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostPage from "../pages/PostPage/Postpage"
import SignupPage from "../pages/SignupPage/SignupPage" 
import ErroPage from "../pages/Erro/ErroPage"


const Router=({rightButtonText,setRightButtonText})=>{
    

return(
    
    
    <Routes>
        <Route index element={<FeedPage />}/>
        <Route path="/login" element={<LoginPage  rightButtonText={rightButtonText} 
        setRightButtonText={setRightButtonText}/>}/>
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/post/:id" element={<PostPage />}/>
        <Route path="*" element={<ErroPage />}/>
    </Routes>
    

)

}

export default Router