import React from "react";
import { ContainerComent,ContainerButtons } from "./style"
import { AiOutlineLike, AiOutlineDislike, AiFillDelete } from 'react-icons/ai'



const CardComents = (props) => {

    return (
        <ContainerComent>
            <p>{props.body}</p>
            <ContainerButtons>
                <AiOutlineLike onClick={() => props.onClickLikeComment(props.id)} />
                <p>{props.voteSum}</p>
                <AiOutlineDislike onClick={() => props.onClickDisLikeComment(props.id)} />
                <AiFillDelete onClick={()=>props.onClickDeleteComment(props.id)} />
            </ContainerButtons>
        </ContainerComent>
    )



}
export default CardComents