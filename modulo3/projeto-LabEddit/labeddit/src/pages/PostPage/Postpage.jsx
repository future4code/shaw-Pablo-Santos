import React, {useEffect} from 'react'
import axios from "axios"
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from "../../hooks/useRequestData"
import { useParams } from "react-router-dom"
import CardComents from "../../components/CardComents/CardComents"
import { ContainerPostPage } from "./style"
import useForm from "../../hooks/useForm"
import {postCreateComent} from "../../services/post"
import {postCreateCommentsVote, putChangeCommentsVote} from "../../services/comments"



const PostPage = () => {
    
    const params = useParams()
    const [form, onChange, clear] = useForm({body:""})
    const getComments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const getPosts = useRequestData([], `${BASE_URL}/posts`)

    const delDeleteCommentVote =(id)=>{
        axios
        .delete(`${BASE_URL}/comments/${id}/votes`,{
            headers:{
                Authorization: localStorage.getItem("token")
            }
        })
        .then((res)=>{
            alert("Deletado com sucesso!")
            console.log(res)
        })
        .catch((err)=>{  
            alert(err.response.data.message)
        })
    
    };

    const filterGetPost = getPosts.filter((post) => {
        return post.id === params.id
    });

    const onClickLikeComment =(id)=>{
        postCreateCommentsVote(id)
    };
    const onClickDisLikeComment =(id)=>{
        putChangeCommentsVote(id)
    };
    const onClickDeleteComment =(id)=>{
        delDeleteCommentVote(id)
    }
   
    const mapGetPostComents = getComments.map((coment) => {
        return <CardComents key={coment.id} 
        onClickLikeComment={onClickLikeComment} 
        onClickDisLikeComment={onClickDisLikeComment}
        onClickDeleteComment={onClickDeleteComment}
        voteSum={coment.voteSum}
        commentCount={coment.commentCount}
        id={coment.id} 
        body={coment.body} 
        />
    });
    const onSubmit =(e)=>{
        e.preventDefault()
        postCreateComent(form,clear, params)
    };
    

    return (
        <ContainerPostPage>
            <h1>Post Page</h1>
            <h2>{filterGetPost && filterGetPost[0] && filterGetPost[0].username}</h2>
            <h3>{filterGetPost && filterGetPost[0] && filterGetPost[0].title}</h3>
            <p>{filterGetPost && filterGetPost[0] && filterGetPost[0].body}</p>
            <>
                <form onSubmit={onSubmit}>
                    <input type="text"
                        name='body'
                        value={form.body}
                        onChange={onChange}
                    />
                    <button>Enviar Comentário</button>
                </form>
            </>
            <>
                {mapGetPostComents}
            </>
        </ContainerPostPage>
    )
}
export default PostPage