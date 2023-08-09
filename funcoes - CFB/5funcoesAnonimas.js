console.log("---Funções anônimas---")
const f=function(v1, v2){return v1+v2}
console.log(f(10,5))

console.log("---Usando Função Construtor---")
//Função construtor que é anônima, precisa ser com F maiúsculo
//                  (parâmetros) e (corpo da Função)
const f2=new Function("v1", "v2", "return v1+v2")
console.log(f2(10,5))
