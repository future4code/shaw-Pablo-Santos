import { useNavigate,useParams } from "react-router-dom";

// Area do usuario
export const goToBack =(navigate)=>{
navigate(-1)

}
export const goToListTripsPage =(navigate)=>{
    navigate("/trips/list")
}


export const goToAplicationFormPage=(navigate)=>{

navigate("/trips/application")

}
// area do ADM
export const goToLoginPage =(navigate)=>{
    navigate("/login")

}
export const goToAdminHomePage =(navigate)=>{
    navigate("/admin/trips/list")
}
export const goToCreateTripPage = (navigate)=>{
    navigate("/admin/trips/create")
}

