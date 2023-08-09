console.log("--------retuno String--------")
function canal() {
    console.log("Estudar")
    return "Estudei"
}

canal()

console.log(canal())

// Neste caso aqui a função está retornando uma "string" mas poderia retornar um resultado de algo vindo da função!

console.log("----retuno de conta-----")
function conta() {
    let n1=5
    let n2=10
    let result = n1*n2
    return result
}
let num = conta()
console.log(num)
//ou
console.log("-----retuno de conta Reduzido---")
console.log(conta())

// Neste caso aqui a função está retornando O RESULTADO da conta e essa função foi atribuída a uma variável "num" que é chamada dentro da impressão!

console.log("-----retuno com if else----")
function parOuImpar() {
    let n1=5
    let n2=10
    let result = n1*n2
    if (result%2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
    
}
//num2 recebe a função está retornando
let num2 = parOuImpar()
console.log(num2)

console.log("-----retuno de conta Reduzido----")
//É pra fazer o outro fazer, neste caso:
//Mostra o que o outro fez:
console.log(parOuImpar())


