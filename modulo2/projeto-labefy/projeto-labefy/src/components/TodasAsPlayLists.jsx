import React from 'react';
import styled from 'styled-components'
import axios from 'axios';
import { headers } from './Lista';

const CardPlayList = styled.div`
width: 100px;
height: 200px;
border: 1px solid green;
`


export default class TodasAsPlayLists extends React.Component {
    state = {
        playLists: [],
    }
    componentDidMount() {
        this.getAllPlayLists()
    }

    getAllPlayLists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios
            .get(url, headers)
            .then((res) => {
                console.log(res.data)
                this.setState({playLists:res.data.result.list})
            })
            .catch((err) => {
                console.log(err)
            })

    }

    render() {
        
        const allPlayLists = this.state.playLists.map((playlist) => {
            return <CardPlayList key={playlist.id}>
                {playlist.name}
            </CardPlayList>
        })

        return (
            <div>
                {allPlayLists}
            </div>
        )
   
   
    }

}
