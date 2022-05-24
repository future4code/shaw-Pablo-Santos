import React from "react";
import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"
import { goToFeedPage } from "../router/coodinator"
import { goToLoginPage } from "../router/coodinator";


export const postSignup = (body, clear, navigate) => {
    axios
        .post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToLoginPage(navigate)

        })
        .catch((err) => {
            alert(err.response.data.message)
            console.log(err)
        })
}


export const postLogin = (body, clear, navigate,setRightButtonText) => {
    axios
        .post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeedPage(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            console.log(err)
        })


}


