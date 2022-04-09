import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { headers } from '../App';

const InputAdcPlaylist = styled.div`
align-items: center;
display: flex;
justify-content: center;

input{
width: 50vh;
height: 40px;
border-radius: 4px;
border: none;
margin:10px;
&:focus{
    margin: 1px solid red;
}
}
button{
    cursor: pointer;
    height: 40px;
    width: 20vh;
    color: white;
    border-radius: 4px;
    border:none;
    background-color: hsl(0deg 100% 50%);
    font-size: 16px;

    &:hover{
        background-color: #000;
        color:hsl(0deg 100% 50%);
    }
}
`

export default class CriarPlayList extends React.Component {
    state = {
        criarPlayList: "",
        playLists: [],

        nameInput: "",
        artistInput: "",
        urlInput: ""
    }

    // Requisição para criar playlist
    onChangeCriarPlayList = (event) => {
        this.setState({ criarPlayList: event.target.value })
    }

    onClickCriarPlayList = () => {
        this.postCratePlaylist()
    }

    postCreatePlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const body = {
            name: this.state.criarPlayList
        }
        axios
            .post(url, body, headers)
            .then((res) => {
                alert(`Play list criada com sucesso!`)
                this.setState({
                    criarPlayList: ""
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }



    render() {
        return (
            <InputAdcPlaylist>

                <input
                    type="text"
                    value={this.state.criarPlayList}
                    onChange={this.onChangeCriarPlayList}
                    placeholder={"Digite o nome da nova Playlist"}
                />
                <button onClick={this.postCreatePlayList}>Criar Playlist</button>
            </InputAdcPlaylist>
        )
    }


}