import styled from "styled-components";

export const ContainerHeader = styled.div`
display: grid;
grid-template-columns: 60px 1fr 150px;
align-items: center;
width: 100%;
height: 2.75rem;
background-image:none;
padding: 0.8rem 1rem 0.5rem 0.8rem;

`

export const BackArrow = styled.img`
background-image: none;
grid-column-start: 1;
`

export const ContainerToggle = styled.div`
display: flex;
justify-content: flex-end;
background:transparent;
grid-column-start: 3;
text-align: center;


p{
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    font-size: 13px;
    color: white;
    background: transparent;
    margin-right: 5px;
}
`
export const Switch = styled.label`

position: relative;
display: inline-block;
width:49px;
height: 23px;

.slider{
    ${(p) => p.choice?  
        (
            " background:rgb(210,179,193);"
        ):""
}
} 
.slider:before{
    ${(p) => p.choice? 
            (
                "transform: translateX(22px);"
            ):""
    }
    }
`;

export const Slider = styled.span`
position:absolute;
cursor: pointer;
top:0;
left:0;
right: 0;
bottom:0;
background:rgba(28,36,40, 0.5) ;
border-radius: 24px;
width: 2.7rem;
height: 1.3rem;
 

&&:before{
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 4px;
    bottom:4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50% 
}
`
export const Checked = styled.input`
 opacity: 0;
    width: 0;
    height: 0;
   
`
export const Fa = styled.p`
width:1rem;
height: 23px;

`
export const Ce = styled.p`
width:1rem;
height: 23px;

`
