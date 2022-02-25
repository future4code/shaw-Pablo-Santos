/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas Vindas ao jogo Blackjack");
            
    if(confirm("Quer iniciar uma partida?")){
      console.log("vamos jogar!")
      let carta1Player1 = comprarCarta();
      let carta2Player1 = comprarCarta();
      let pontosPlayer1 = carta1Player1.valor + carta1Player1.valor
      console.log(`Cartas do Player 1 são: ${carta1Player1.texto} e ${carta2Player1.texto} total: ${pontosPlayer1}pontos`);
      let card1Pc = comprarCarta();
      let card2Pc = comprarCarta();
      let pontosPC = card1Pc.valor + card2Pc.valor
      console.log(`Cartas do PC são: ${card1Pc.texto} e ${card2Pc.texto} total: ${pontosPC}pontos`);

         if(pontosPlayer1 > pontosPC){
            console.log("Player 1 venceu! 🎉");
         }else if(pontosPlayer1 === pontosPC){
            console.log("Empate!🤡");         
         }else{
            console.log("PC venceu! 🎉");
         }

         console.log("Aperte F5 para jogar novamente!");

      }else{

      console.log("O jogo acabou!");
      console.log("Se quiser jogar novamente, aperte F5 !");
   }
   
