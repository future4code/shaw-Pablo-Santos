import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state={
      usuarios:[ {
      nomeUsuario: "Paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost:"https://picsum.photos/200/150"
  },
  {
    nomeUsuario: "Pablo",
    fotoUsuario: "https://media-exp1.licdn.com/dms/image/C5603AQHAkKPvRllCIA/profile-displayphoto-shrink_100_100/0/1617972895675?e=1653523200&v=beta&t=DebZjgC6mOfpfPpsYHo3F0XbjHheeltrl4-dRsjN7dU",
    fotoPost:"https://picsum.photos/200/150"
},
{
  nomeUsuario: "Will",
  fotoUsuario: "https://media-exp1.licdn.com/dms/image/C4E03AQEd30k5Zs45ig/profile-displayphoto-shrink_100_100/0/1622503293163?e=2147483647&v=beta&t=NBRsVlKS9OWPuc8vKVCEI4sBp9QDJL7XRsamUvOIFNM",
  fotoPost:"https://picsum.photos/200/150"
}],

    valorInputNomeUsuario:"",
    valorInputFotoUsuario:"",
    valorInputFotoPost:"" 
  }



  render() {

    const listaDeComponentes = this.state.pessoas.map((usuario) => {
      // Porém, cada pessoa não é mais uma string somente, mas sim um objeto
      // com duas propriedades. Por isso, no momento de colocá-la na tela
      // precisamos explicitar qual das propriedades queremos mostrar em
      // cada lugar.
      return (
        <p>
          {usuario.nome} - {usuario.email} - {usuario.telefone}
        </p>
      );
    });


    return (
    
      <MainContainer>
        <Post
          /* nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Pablo'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C5603AQHAkKPvRllCIA/profile-displayphoto-shrink_100_100/0/1617972895675?e=1653523200&v=beta&t=DebZjgC6mOfpfPpsYHo3F0XbjHheeltrl4-dRsjN7dU'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Will'}
          fotoUsuario={'https://media-exp1.licdn.com/dms/image/C4E03AQEd30k5Zs45ig/profile-displayphoto-shrink_100_100/0/1622503293163?e=2147483647&v=beta&t=NBRsVlKS9OWPuc8vKVCEI4sBp9QDJL7XRsamUvOIFNM'}
          fotoPost={'https://picsum.photos/200/150'} */
        />
      </MainContainer>
    );
  }
}


export default App;
