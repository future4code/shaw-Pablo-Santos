import React from "react";
import { ContainerPost, CardButtons } from "./style";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { VscCommentDiscussion } from 'react-icons/vsc'


const CardPosts = (props) => {

    return (
        <ContainerPost >
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <CardButtons>
                <p><AiOutlineLike onClick={() => props.onClickLike(props.id)} /></p>
                <p>{props.voteSum}</p>
                <p><AiOutlineDislike onClick={() => props.onClickDislike(props.id)} /></p>
                <p> <VscCommentDiscussion onClick={() => props.onClickDetail(props.id)} /></p>
                <p>{props.commentCount}</p>
            </CardButtons>
        </ContainerPost>


    )


}
export default CardPosts