import React from 'react'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from "../../hooks/useRequestData"
import { useParams } from "react-router-dom"
import CardComents from "../../components/CardComents/CardComents"
import { ContainerPostPage } from "./style"
import useForm from "../../hooks/useForm"
import {postCreateComent} from "../../services/post"

const PostPage = () => {
    const params = useParams()
    const [form, onChange, clear] = useForm({body:""})
    const getPostComents = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const getPosts = useRequestData([], `${BASE_URL}/posts`)

  

    const filterGetPost = getPosts.filter((post) => {
        return post.id === params.id
    })

    console.log(getPostComents)
    const mapGetPostComents = getPostComents.map((coment) => {
        return <CardComents key={coment.id} body={coment.body} />
    })

    const onSubmit =(e)=>{
        e.preventDefault()
        postCreateComent(form,clear, params)
    }

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