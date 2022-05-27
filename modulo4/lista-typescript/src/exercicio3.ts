enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


type Filme={
    nome:string,
    ano:number,
    genero:GENERO,
    pontuacao?:number|string
}

function filmes(nome:string, ano:number,genero:GENERO,pontuacao?:number):Filme{

 return ({nome:nome, ano:ano , genero:genero, pontuacao:pontuacao? pontuacao :"Sem Pontuação"})

}
console.table(filmes("Titanic",1950,GENERO.COMEDIA,))