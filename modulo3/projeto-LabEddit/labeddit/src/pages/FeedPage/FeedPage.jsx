import React from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import  useRequestData  from "../../hooks/useRequestData"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { postCreatePost } from "../../services/post"
import { ContainerFeed,ContainerForm,IputFeed,TextAreaInput,ButtonPostar,DivStyle } from "./style"
import CardPosts from "../../components/CardPost/CardPosts"
import { goToPostPage } from "../../router/coodinator"
import { useNavigate, useParams } from "react-router-dom"
import {postCreatePostVote, putChangePostVote} from "../../services/post"



const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const params= useParams()
    const [posts, getPostsData] = useRequestData([],`${BASE_URL}/posts`) 
    
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    


    const onSubmit = (event) => {
        event.preventDefault()
        postCreatePost(form,clear,getPostsData)
    }
    const onClickDetail =(id)=>{
        goToPostPage(navigate, id)
    }
    const onClickLike =(id)=>{
       postCreatePostVote(id,getPostsData)
    }
    const onClickDislike =(id)=>{
        putChangePostVote(id,getPostsData)
    }

    const postsInScree = posts.map((post)=>{
        return <CardPosts 
        onClickDetail={onClickDetail} 
        key={post.id} 
        onClickLike={onClickLike} 
        onClickDislike={onClickDislike}
        id={post.id}
        username={post.username}
        title={post.title}
        body={post.body}
        voteSum={post.voteSum}
        commentCount={post.commentCount}
        />
    })

    return (
        <ContainerFeed>
            <ContainerForm onSubmit={onSubmit}>
                <IputFeed
                    placeholder="Título"
                    type="text"
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                />
                <TextAreaInput
                placeholder="Escreva seu post..."
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    cols="30" rows="10"/>
                <ButtonPostar>Postar</ButtonPostar>
                <DivStyle></DivStyle>
            </ContainerForm>
            {postsInScree}
        </ContainerFeed>
    )
}
export default FeedPage