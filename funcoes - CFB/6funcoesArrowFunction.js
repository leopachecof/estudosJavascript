// Padrão Normal:
// const soma=function(v1, v2){return v1+v2}

const soma=(v1,v2)=>{return v1+v2}
console.log(soma(80,30))

//Quando é apenas uma passagem de valor, não precisa de parenteses
const nome=n=>{return n}
console.log(nome("Leo"))

//esse outro modelo não precisa nem de return
const add=n=>n+20
console.log(add(75))