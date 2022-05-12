import React from "react";
import { ContainerPost, CardButtons,DivLikesDislikes,DivComentsButton,ContainerArticle } from "./style";
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { VscCommentDiscussion } from 'react-icons/vsc'


const CardPosts = (props) => {

    return (
        <ContainerPost >
            <ContainerArticle>
            <p className="article">Enviado por: {props.username}</p>
            <p className="article">{props.title}</p>
            <h2 className="article">{props.body}</h2>
            </ContainerArticle>
           
            <CardButtons>
                <DivLikesDislikes>
                <p className="likeDislike"><AiOutlineLike onClick={() => props.onClickLike(props.id)} /></p>
                <p className="likeDislike">{props.voteSum}</p>
                <p className="likeDislike"><AiOutlineDislike onClick={() => props.onClickDislike(props.id)} /></p>
                </DivLikesDislikes>
                <DivComentsButton onClick={() => props.onClickDetail(props.id)}>
                <p className="likeDislike"> <VscCommentDiscussion/></p>
                <p id="likeDislike">{props.commentCount}</p>
                </DivComentsButton>
            </CardButtons>
        </ContainerPost>


    )


}
export default CardPosts