import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQHAkKPvRllCIA/profile-displayphoto-shrink_800_800/0/1617972895675?e=1653523200&v=beta&t=gco2CConh_Gp9KPuPUAGRj8j2EwqQ3Ih7TMUSm8Va5g" 
          nome="Pablo Gomes dos Santos" 
          descricao="Oi, eu sou o Pablo. Sou estudante de Web FullStack na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="littlecard-container">
        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/512/3807/premium/3807583.png?token=exp=1647970639~hmac=fbb90d7b30c87e2ca590e67af90af7e7"
        descricao="E-mail"
        mensagem="pablogomes_bm@hotmail.com"
        />
        <CardPequeno
         imagem="https://cdn-icons-png.flaticon.com/512/181/181508.png"
         descricao="Endereço"
         mensagem="Rua Labenu"  
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
