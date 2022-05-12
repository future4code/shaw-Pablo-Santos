import styled from "styled-components";

export const ContainerPost =styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #f2f2f2;
border-radius: 2px solid;
margin: 2px;
max-width: 70%;
min-height: 15vh;
padding: 1em;
border: 1px solid #e0e0e0 ;
border-radius: 12px;
background-color: #fbfbfb;
word-wrap: break-word;


`
export const ContainerArticle=styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: start;
.article{
    margin:0.5em 0 0.5em 0;
}

`
export const CardButtons =styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
p{
    cursor: pointer;
    font-size: 20px;
}
`
export const DivLikesDislikes =styled.div`
display: flex;
width: 50%;
justify-content: center;
align-items: center;
.likeDislike{
    margin: 1em;
}
`
export const DivComentsButton =styled.div`
display: flex;
width: 50%;
justify-content: center;
align-items: center;
p{
 margin: 0.5em;    
}

`
