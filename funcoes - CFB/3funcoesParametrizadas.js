console.log("-----Função com Parâmetros----")
//Nesta função os parâmentros transferem para o cálculo ser realizado dentro da função.
//também transferem string
function soma(n1, n2) {
    console.log(n1+n2)
}
soma(5,6)
soma(15,3)
soma("Leo","Pacheco")

//Abaixo incluso o valor zero para não gerar NaN, pois tivemos apenas 1 parâmentro
console.log("----Faltando Parâmetros----")
function soma2(n3 =0, n4=0) {
    console.log(n3+n4)
}
soma2(10)


//Abaixo incluso o valor zero para não gerar NaN, pois tivemos apenas 1 parâmentro
console.log("-----Parâmetros com retorno----")
function soma3(n5 =0, n6=0) {
    return n5+n6
}
console.log(soma3(9,10))

console.log("---alterar o valor da variável fora da função---")

let valor = 0
console.log(valor)//nesse momento valor = zero

function add(v){
    return valor + v // 0 + 45 que vem da função abaixo
}
valor = add(45) // Aqui o valor recebe o retorno que é 45
console.log(valor) // mostra 45

valor = add(5) //nesse momenrto o valor é 45 e vai somar com o 5 no retorno da função da linha 32
console.log(valor)

console.log("---agora sem usar o return---")

let valor2 = 0
console.log(valor2)

function add2(v){
    valor2+=v
}
add2(34)
console.log(valor2)