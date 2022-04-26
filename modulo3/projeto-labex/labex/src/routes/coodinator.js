import { useNavigate,useParams } from "react-router-dom";

// Area do usuario
export const goToBack =(navigate)=>{
navigate(-1)

}
export const goToListTripsPage =(navigate)=>{
    navigate("/listTripsPage")
}


export const goToAplicationFormPage=(navigate)=>{

navigate("/aplicationFormPage")

}
// area do ADM
export const goToLoginPage =(navigate)=>{
    navigate("/loginPage")

}
export const goToAdminHomePage =(navigate)=>{
    navigate("/adminHomePage")
}
export const goToCreateTripPage = (navigate)=>{
    navigate("/createTripPage")
}

