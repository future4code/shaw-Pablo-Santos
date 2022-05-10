import React from "react";
import { postCreatePost } from "../../services/post";
import { ContainerPost } from "./style";


const CardPosts =(props)=>{
return(
<ContainerPost onClick={()=>props.onClickDetail(props.id)}>
<h2>{props.title}</h2>
<p>{props.body}</p>
</ContainerPost>


)


}
export default CardPosts