import React from "react";
import { postCreatePost } from "../../services/post";
import {ContainerComent} from "./style"


const CardComents =(props)=>{

return(
    <ContainerComent>
        <p>{props.body}</p>
    </ContainerComent>
)
  


}
export default CardComents