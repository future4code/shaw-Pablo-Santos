import React from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import  useRequestData  from "../../hooks/useRequestData"
import useProtectedPage from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { postCreatePost } from "../../services/post"
import { ContainerFeed } from "./style"
import CardPosts from "../../components/CardPost/CardPosts"
import { goToPostPage } from "../../router/coodinator"
import { useNavigate } from "react-router-dom"


const FeedPage = () => {
    const navigate = useNavigate()
    const getPosts = useRequestData([],`${BASE_URL}/posts`) 
    
    const [form, onChange, clear] = useForm({ title: "", body: "" })
    useProtectedPage()


    const onSubmit = (event) => {
        event.preventDefault()
        postCreatePost(form,clear)
    }
    const onClickDetail =(id)=>{
        goToPostPage(navigate, id)
    }

    const postsInScree = getPosts.map((post)=>{
        return <CardPosts onClickDetail={onClickDetail} key={post.id} id={post.id} title={post.title} body={post.body}/>
    })

    return (
        <ContainerFeed>
            <form onSubmit={onSubmit}>
                <h2>Crie seu Post</h2>

                <input
                    placeholder="Título"
                    type="text"
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                />
                <textarea
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    cols="30" rows="10"/>
                <button>Postar</button>
            </form>
            {postsInScree}
        </ContainerFeed>
    )
}
export default FeedPage