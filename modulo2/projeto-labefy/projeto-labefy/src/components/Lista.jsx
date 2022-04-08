import React from 'react';
import styled from 'styled-components'
import axios from 'axios';


export const headers = {
    headers: {
        Authorization: "pablo-gomes-shaw"
    }
}


export default class Lista extends React.Component {
    state = {
        criarPlayList: "",
        playLists: [],
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
                    criarPlayList:""
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    //requisiçao para mostrar todas as playlists

  

    render() {
        return (
            <div>
               
                <input type="text"
                    value={this.state.criarPlayList}
                    onChange={this.onChangeCriarPlayList}
                />
                <button onClick={this.postCreatePlayList}>Criar Playlist</button>
            </div>
        )
    }


}