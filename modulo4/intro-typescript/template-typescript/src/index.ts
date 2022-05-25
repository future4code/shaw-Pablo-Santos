//escreva o seu código aqui
//ex 1
function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log("ex 1",checaTriangulo(10,20,30))

//ex 2
  function imprimeTresCoresFavoritas(cor1:string, cor2:string, cor3:string):void {
  

    console.log("ex 2",[cor1, cor2, cor3])
 }
imprimeTresCoresFavoritas("azul", "amarelo", "verde")

//ex 3
function checaAnoBissexto(ano:number):boolean {
    const cond1 :boolean = ano % 400 === 0
    const cond2 :boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
 console.log("ex 3",checaAnoBissexto(2020))

 //ex 4

 function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca:number = maiorNumero - menorNumero;
  
    return diferenca 
  }
  console.log("ex 4", comparaDoisNumeros(10,20))
// ex 5

function checaRenovacaoRG(anoAtual:number,anoNascimento:number,anoEmissao:number):boolean {
    
    const idade:number= anoAtual - anoNascimento
    const tempoCarteira:number = anoAtual - anoEmissao
 
    const cond1:boolean = idade <= 20 && tempoCarteira >= 5
    const cond2 :boolean= idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3:boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 console.log("ex 5",checaRenovacaoRG(10,20,30))



