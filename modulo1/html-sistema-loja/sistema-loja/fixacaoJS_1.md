```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 const salario = 2000
 let bonus = qtdeCarrosVendidos * 100
 let  porcentagemVendas = (valorTotalVendas / 100) * 5 
 return bonus + porcentagemVendas + salario

}