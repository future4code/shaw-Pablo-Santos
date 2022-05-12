import React from "react";
import { ContainerComent,ContainerButtons,DivLikesDislikes,DivDelButton } from "./style"
import { AiOutlineLike, AiOutlineDislike, AiFillDelete } from 'react-icons/ai'



const CardComents = (props) => {

    return (
        <ContainerComent>
            <p>Enviado por: {props.username}</p>
            <h2>{props.body}</h2>
            <ContainerButtons>
                <DivLikesDislikes>
                <span><AiOutlineLike onClick={() => props.onClickLikeComment(props.id)} /></span>
                <p>{props.voteSum}</p>
                <span><AiOutlineDislike onClick={() => props.onClickDisLikeComment(props.id)} /></span>
                </DivLikesDislikes>
                <DivDelButton>
               <span> <AiFillDelete onClick={()=>props.onClickDeleteComment(props.id)} /></span>
               </DivDelButton>
            </ContainerButtons>
        </ContainerComent>
    )
}
export default CardComents