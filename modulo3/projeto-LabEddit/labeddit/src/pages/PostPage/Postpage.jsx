import React, {useEffect} from 'react'
import axios from "axios"
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from "../../hooks/useRequestData"
import { useParams } from "react-router-dom"
import CardComents from "../../components/CardComents/CardComents"
import { ContainerPostPage,Cardget,ContainerForm,IputComents,ButtonComents,DivStyle } from "./style"
import useForm from "../../hooks/useForm"
import {postCreateComent} from "../../services/post"
import {postCreateCommentsVote, putChangeCommentsVote} from "../../services/comments"
import useProtectedPage from "../../hooks/useProtectedPage"


const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const [form, onChange, clear] = useForm({body:""})
    const [comments, getComents] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)

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
    

    const filterGetPost = posts.filter((post) => {
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
   
    const mapGetPostComents = comments.map((coment) => {
        return <CardComents key={coment.id} 
        onClickLikeComment={onClickLikeComment} 
        onClickDisLikeComment={onClickDisLikeComment}
        onClickDeleteComment={onClickDeleteComment}
        username={coment.username}
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
            <Cardget>
            <p>Envido por: {filterGetPost && filterGetPost[0] && filterGetPost[0].username}</p>
            <p>{filterGetPost && filterGetPost[0] && filterGetPost[0].title}</p>
            <h2>{filterGetPost && filterGetPost[0] && filterGetPost[0].body}</h2>
            </Cardget>
            
                <ContainerForm onSubmit={onSubmit}>
                    <IputComents placeholder='Comente aqui...' type="text"
                        name='body'
                        value={form.body}
                        onChange={onChange}
                    />
                    <ButtonComents>Enviar Comentário</ButtonComents>
                    <DivStyle></DivStyle>
                </ContainerForm>
            
            <>
                {mapGetPostComents}
            </>
        </ContainerPostPage>
    )
}
export default PostPage