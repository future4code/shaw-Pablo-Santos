import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { headers } from '../App';

const CardPlayList = styled.div`
width: 300px;
height: 50px;
box-shadow: 10px 5px 5px black;
color:white;
background-color: #101010;
display: flex;
justify-content: space-between;
padding: 10px;
align-items: center;
margin:10px;
&:hover{
    background-color: rgb(22 22 22);
}

`


export default class TodasAsPlayLists extends React.Component {
    state = {
        playLists: [],
        tracks: [],
        nameInput: "",
        artistInput: "",
        urlInput: ""
    }

    //Requisição para pegar todas as playlists
    getAllPlayLists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios
            .get(url, headers)
            .then((res) => {

                this.setState({ playLists: res.data.result.list })
            })
            .catch((err) => {
                console.log(err)
            })

    }
    componentDidMount() {
        this.getAllPlayLists()
    }
    //função do botao veja mais

    //requisição para adicionar musicas a playlist

    postAddTrackToPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nameInput,
            artist: this.state.artistInput,
            url: this.state.urlInput,
        }
        axios
            .post(url, body, headers)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    oChangenameInput = (event) => {
        this.setState({
            nameInput: event.target.value
        })
    }
    oChangeArtistInput = (event) => {
        this.setState({ artistInput: event.target.value })
    }
    oChangeUrlInput = (event) => {
        this.setState({ urlInput: event.target.value })
    }
    componentDidUpdate() {

        this.postAddTrackToPlaylist()

    }


    //requisição para pegar todas as musicas da playlist

    getPlayListTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios
            .get(url, headers)
            .then((res) => {
                this.setState({ tracks: res.data.result.tracks })
            })
            .catch((err) => {
                console.log(err)
            })

    }



    // requisção parfa deletar playlists
    deletePlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios
            .delete(url, headers)
            .then((res) => {
                alert("A Playlist foi deletada!")
                this.getAllPlayLists()
            })
            .catch((err) => {
                console.log(err)
            })
    }









    render() {

        const allPlayLists = this.state.playLists.map((playlist) => {
            return <CardPlayList key={playlist.id}>
                {playlist.name}

                <button onClick={() => this.deletePlaylist(playlist.id)}>Delete Playlist</button>

            </CardPlayList>
        })

        return (
            <div>
                {allPlayLists}
                <div>

                    <input type="text"
                        placeholder='Nome da Música'
                        value={this.state.nameInput}
                        onChange={this.oChangenameInput}
                    />
                    <input type="text"
                        placeholder='Astista'
                        value={this.state.artistInput}
                        onChange={this.oChangeArtistInput} />
                    <input type="text"
                        placeholder='Url'
                        value={this.state.urlInput}
                        onChange={this.oChangeUrlInput} />
                    <button onClick={this.postAddTrackToPlaylist}>Adicionar à playlist</button>
                </div>

            </div>
        )


    }

}
