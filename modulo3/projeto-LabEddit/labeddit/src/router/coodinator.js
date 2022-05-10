import React from "react";




export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToSignupPage = (navigate) => {
    navigate("/signup")
}
export const goToPostPage = (navigate, id) => {
    navigate(`/post/${id}`)
}
export const goToBack = (navigate) => {
    navigate(-1)
}
