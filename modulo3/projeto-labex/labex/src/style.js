import React from "react"
import styled from "styled-components"

export const ContainerHeader = styled.header`
background: #e4f5fc; /* Old browsers */
background: -moz-linear-gradient(left,  #e4f5fc 0%, #bfe8f9 50%, #9fd8ef 65%, #2692d6 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 65%,#2692d6 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 65%,#2692d6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2692d6',GradientType=1 ); /* IE6-9 */

width: 100%;
height: 13vh;
img{
    width: 110px;
    position: relative;
    left: 5em;
    top: -1em;
   
`

export const ContainerFooter = styled.footer`
background: #e4f5fc; /* Old browsers */
background: -moz-linear-gradient(right,  #e4f5fc 0%, #bfe8f9 50%, #9fd8ef 65%, #2692d6 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(right,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 65%,#2692d6 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to left,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 65%,#2692d6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e4f5fc', endColorstr='#2692d6',GradientType=1 ); /* IE6-9 */

width: 100%;
height: 13vh;
`